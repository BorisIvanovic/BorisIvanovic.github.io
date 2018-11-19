$(document).ready(function() {
    var e = location.href.toLowerCase();
    $(".navigation li a").each(function() {
        e.indexOf(this.href.toLowerCase()) > -1 && ($("li.highlight").removeClass("highlight"), $(this).parent().addClass("highlight"))
    })
}), $(".toggle-menu").click(function() {
    return $(".responsive-menu").stop(!0, !0).slideToggle(), !1
});
