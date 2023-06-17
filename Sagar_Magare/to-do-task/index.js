$('.container').hide();


// add task popup

$(document).on('click', '.add-task', function () {
    $('.container').show().addClass("animate__animated animate__jackInTheBox");
});

// close task popup

$(document).on('click', '.close', function () {
    $('.container').hide();
});


// add task table

$(document).on('click', '.submit', function () {
    const title = $('.task-title-name').val();
    if (title != "") {
        $('.task-table').append("<div class='container-taskbox overflow-auto border ms-5 my-4'style='width: 400px; height: 450px; background-color: rgb(120, 177, 220);'><div class='task-box d-flex p-2 justify-content-between' style='background-color: rgb(43, 136, 207);'>" + "<div class='fs-4 text-light'>" + title + "</div>" + "<div class='my-2' style='cursor:pointer;'><i class='fa-solid fa-plus fa-xl me-4 add-list' style='color: white;'></i><i class='fa-solid fa-trash fa-xl me-2 delete-table' style='color: white;'></i></div></div>" + "<div class='container-descr'>" + "</div>" + "</div>");
        $('.container').hide();
    }
});

// delete task table

$(document).on('click', '.delete-table', function () {
    Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
        if (result.isConfirmed) {
            $(this).parent().parent().parent().remove();
            $('.container').hide();
            Swal.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
            )
        }
    })

});

// add table-list

$(document).on('click', '.add-list', function () {
    $(this).parents('.container-taskbox').find('.container-descr').append("<div class='description m-2 border rounded p-2' style='background-color:rgb(186, 204, 215);'><div class='d-flex justify-content-between list-descr'>" + "<h6>" + "</h6>" + "<input type='text' class='editInput border-start-0 border-top-0 border-end-0' style = 'background-color: rgb(186, 204, 215); position:absolute; width:15rem;'>" + "<div class='descr-sign d-flex mt-2'><i class='fa-solid fa-pen edit-descr mx-2'></i><i class='fa-solid fa-check update-descr mx-2'></i><i class='fa-solid fa-trash delete-descr mx-2'></i></div></div></div>");
});


// update table list

$(document).on('click', '.update-descr', function () {
    var input_descr = $(this).parents(".list-descr").find(".editInput").val();
    $(this).parents(".list-descr").find("h6").text(input_descr).css({ 'opacity': '1', 'visibility': 'visible' });
    $(this).parents(".list-descr").find(".editInput").css({ 'opacity': '0', 'visibility': 'hidden' });
});

// edit table list

$(document).on('click', '.edit-descr', function () {
    var edit_descr = $(this).parents(".list-descr").find("h6").text();
    $(this).parents(".list-descr").find("h6").css({ 'opacity': '0', 'visibility': 'hidden' });
    $(this).parents(".list-descr").find(".editInput").val(edit_descr).css({ 'opacity': '1', 'visibility': 'visible' });
});

// delete table task

$(document).on('click', '.delete-descr', function () {
    $(this).parent().parent().parent().remove();
});