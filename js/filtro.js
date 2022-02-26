$(document).ready(
    function() {

        $('#secadd').hide();
        $('#secread').hide();
        $('#secupd').hide();
        $('#secdelete').hide();



        $('#create').click(
            function() {
                $('#secadd').show();
                $('#secread').hide();
                $('#secupd').hide();
                $('#secdelete').hide();
            }
        );

        $('#read').click(
            function() {
                $('#secadd').hide();
                $('#secread').show();
                $('#secupd').hide();
                $('#secdelete').hide();
            }
        );

        $('#update').click(
            function() {
                $('#secadd').hide();
                $('#secread').hide();
                $('#secupd').show();
                $('#secdelete').hide();
            }
        );

        $('#delete').click(
            function() {
                $('#secadd').hide();
                $('#secread').hide();
                $('#secupd').hide();
                $('#secdelete').show();
            }
        );

    }

);