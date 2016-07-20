$(document).ready(function(){
    $('#AddBalance').on('shown.bs.modal', function () {
        $('#AddBalance').focus();
    });
    $('#MonthlySnapshot').on('shown.bs.modal', function () {
        $('#MonthlySnapshot').focus();
    });
    $('#AnalyzeSpending').on('shown.bs.modal', function () {
        $('#AnalyzeSpending').focus();
    });
    $('.submit-balance').on('click', function() {
        var money = $('.money').val();
        $.post({
            'url': 'http://localhost:8080',
            'data': {
                'money': money
            }
        });
    });
})
