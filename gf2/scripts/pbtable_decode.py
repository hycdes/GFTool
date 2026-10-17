import sys, struct

def read_varint(b, i):
    shift = 0; result = 0
    while True:
        if i >= len(b): raise ValueError("eof varint")
        x = b[i]; i += 1
        result |= (x & 0x7f) << shift
        if not (x & 0x80): break
        shift += 7
    return result, i

def try_parse(b):
    # returns list of (field, wiretype, value) or None if not a clean parse
    out = []; i = 0
    try:
        while i < len(b):
            key, i = read_varint(b, i)
            f = key >> 3; wt = key & 7
            if f == 0: return None
            if wt == 0:
                v, i = read_varint(b, i); out.append((f, wt, v))
            elif wt == 2:
                ln, i = read_varint(b, i)
                if i + ln > len(b): return None
                out.append((f, wt, b[i:i+ln])); i += ln
            elif wt == 5:
                out.append((f, wt, struct.unpack('<I', b[i:i+4])[0])); i += 4
            elif wt == 1:
                out.append((f, wt, struct.unpack('<Q', b[i:i+8])[0])); i += 8
            else:
                return None
        return out
    except Exception:
        return None

def dump(b, depth, maxdepth, out):
    fields = try_parse(b)
    if fields is None:
        out.append("  "*depth + "raw(%d): %r" % (len(b), b[:60]))
        return
    for f, wt, v in fields:
        if wt == 2 and depth < maxdepth:
            sub = try_parse(v)
            if sub is not None and len(v) > 0:
                out.append("  "*depth + "f%d msg(%d):" % (f, len(v)))
                dump(v, depth+1, maxdepth, out)
            else:
                try:
                    s = v.decode('utf-8')
                    printable = all(31 < ord(c) or c in '\n\t' for c in s)
                    out.append("  "*depth + "f%d str: %s" % (f, s if printable else repr(v[:60])))
                except Exception:
                    out.append("  "*depth + "f%d bytes(%d): %s" % (f, len(v), v[:60].hex()))
        else:
            out.append("  "*depth + "f%d varint: %d" % (f, v))

fn = sys.argv[1]
maxdepth = int(sys.argv[2]) if len(sys.argv) > 2 else 4
skip = int(sys.argv[3]) if len(sys.argv) > 3 else 0
b = open(fn, 'rb').read()
b = b[skip:]
out = ["file=%s len=%d skip=%d" % (fn, len(b), skip)]
dump(b, 0, maxdepth, out)
print("\n".join(out))
