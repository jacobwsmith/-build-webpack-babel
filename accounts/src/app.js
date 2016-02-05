import './app.css';

class AppCtrl {
    constructor() {
        var appVm = this;
        appVm.title = 'Accounts';
    }
}

// Example of injecting dependencies
//AppCtrl.$inject = ['UserService'];

export default AppCtrl;