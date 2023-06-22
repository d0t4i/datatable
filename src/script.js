$('#myTable').DataTable( {
    ajax: {
        url: 'https://6493aaff0da866a9536694b6.mockapi.io/api/users/',
        dataSrc: ''
    },
    columns:[{data:'id'}, {data: 'name'}]
           
} );
