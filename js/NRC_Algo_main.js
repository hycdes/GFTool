var p_metrix = [
    [0.7, 0.28, 0.02, 0],
    [0, 0.79, 0.2, 0.01],
    [0, 0, 0.9, 0.1],
    [0, 0, 0, 1]
]

function is_equal_reconstruct(a1, a2, b1, b2) {
    if (a1 + a2 === b1 + b2 && Math.abs(a1 - a2) === Math.abs(b1 - b2)) return true
    return false
}
function is_goto(a1) {
    var p = Math.random(), list_p = p_metrix[a1]
    var i = 0, p_current = list_p[i], goto_i = 0
    while (p_current)

}

function _test_algoreconstruct(init_1, init_2, final_1, final_2, num) {

    var count = 1
    for (var i = 0; i < num; i++) {
        var i1 = init_1, i2 = init_2, f1 = final_1.f2 = final_2
        while (!is_equal_reconstruct(i1, i2, f1, f2)) {
            ;
        }
    }
}