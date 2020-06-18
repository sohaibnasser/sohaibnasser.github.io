$(document).ready(function() {    
    var a = $("#datatable-buttons").DataTable({
        lengthChange: !1,
        buttons: ["print"],
        language: {
            paginate: {
                previous: "<i class='uil uil-angle-left'>",
                next: "<i class='uil uil-angle-right'>"
            }
        },
        drawCallback: function() {
            $(".dataTables_paginate > .pagination").addClass("pagination-rounded");
        }
    });
    a.buttons().container().appendTo(".page-title .buttons");
	
		var b = $("#datatable-buttons1").DataTable({
        lengthChange: !1,        
        language: {
            paginate: {
                previous: "<i class='uil uil-angle-left'>",
                next: "<i class='uil uil-angle-right'>"
            }
        },
        drawCallback: function() {
            $(".dataTables_paginate > .pagination").addClass("pagination-rounded");
        }
    });
	
		$('#datatable-buttons tbody').on( 'click', '.delete-icon', function () {
    	a.row( $(this).parents('tr') ).remove().draw();
		});
	
		$('a[data-toggle="tab"]').on('shown.bs.tab', function(e){
      $($.fn.dataTable.tables(true)).DataTable();
   });
		
		
});