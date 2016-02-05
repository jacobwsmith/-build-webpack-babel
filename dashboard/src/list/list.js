import './list.css';

export default class ListCtrl {
    constructor() {
        var listVm = this;
        listVm.title = 'List';
        listVm.clickMe = clickMe;
    }
}

// Example of injecting dependencies
//ListCtrl.$inject = ['UserService'];

//////

function clickMe(){
    alert('yep! I have been clicked');
}