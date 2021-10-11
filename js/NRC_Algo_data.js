var lib_neursoul_data = new Map
function create_neursoul(hp, ad, ap, addfs, apdfs, rof, crit, critdmg, adpnt, appnt, eva, hprecover) {
    var neursoul = {}
    neursoul.hp = hp
    neursoul.ad = ad
    neursoul.ap = ap
    neursoul.addfs = addfs
    neursoul.apdfs = apdfs
    neursoul.rof = rof
    neursoul.crit = crit
    neursoul.critdmg = critdmg
    neursoul.adpnt = adpnt
    neursoul.appnt = appnt
    neursoul.eva = eva
    neursoul.hprecover = hprecover
    return neursoul
}
function _search(job_id, neursoul_id) {
    return lib_neursoul_data.get(job_id + '-' + neursoul_id)
}

lib_neursoul_data.set('1-1', create_neursoul(10253, 582, 529, 168, 168, 120, 0.1, 0.5, 438, 397, 0, 364)) // hubble

lib_neursoul_data.set('2-1', create_neursoul(16474, 549, 436, 368, 368, 110, 0.1, 0.5, 391, 359, 0.05, 588)) // aki