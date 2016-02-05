import './app.css';

export default class AppCtrl {
    constructor() {
        var appVm = this;
        appVm.title = 'Dashboard';
    }
}

// Example of injecting dependencies
//AppCtrl.$inject = ['UserService'];

//////