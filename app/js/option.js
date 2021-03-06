(function () {
    /*global $, localStorage*/

    var $port = $('#port');
    var $hosts = $('#hosts');
    var $save = $('#save');
    var $autoClone = $('#autoClone');

    $port.val(localStorage.getItem('port'));
    $hosts.val(localStorage.getItem('hosts'));

    var autoClone = localStorage.getItem('autoClone');
    if (autoClone === 'true') {
        $autoClone.prop('checked', true);
    } else {
        $autoClone.prop('checked', false);
    }

    $save.click(function () {
        localStorage.setItem('port', $port.val());
        localStorage.setItem('hosts', $hosts.val());
        localStorage.setItem('autoClone', $autoClone.prop('checked'));

        $save.text("saved");
    });
}());

