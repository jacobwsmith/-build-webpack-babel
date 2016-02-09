import './list.css';

class ListCtrl {
    constructor($scope, DataFactory) {
        var listVm = this;
        listVm.title = 'List';
        listVm.clickMe = clickMe;
        listVm.loaded = DataFactory.loaded;
    }
}

// Example of injecting dependencies
ListCtrl.$inject = ['$scope', 'DataFactory'];
export default ListCtrl;

//////

function clickMe(){
    alert('yep! I have been clicked');
}