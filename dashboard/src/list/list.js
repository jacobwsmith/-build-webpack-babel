import './list.css';

class ListCtrl {
    constructor($scope, DataService) {
        var listVm = this;
        listVm.title = 'List';
        listVm.clickMe = clickMe;
        listVm.loaded = DataService.loaded;
    }
}

// Example of injecting dependencies
ListCtrl.$inject = ['$scope', 'DataService'];
export default ListCtrl;

//////

function clickMe(){
    alert('yep! I have been clicked');
}