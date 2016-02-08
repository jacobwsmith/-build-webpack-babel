import './summary.css';

class SummaryCtrl {
    constructor($scope, DataService) {
        var summaryVm = this;
        summaryVm.title = 'Summary';
        this.$scope = $scope;
        this.loaded = DataService.loaded;
        
        
        // THIS DOES NOT WORK..... UGH!!!!
        this.$scope.$watch('this.DataService', (newValue, oldValue) => {
            console.log('=== SummaryCtrl changed ===');
            // console.log(newValue, oldValue);
            // summaryVm.loaded = DataService.loaded;
        }, true);
        
        
       setTimeout(() => {
           console.log('4 seconds up');
           console.log(DataService.loaded);
       }, 4000);
        
    }
}

SummaryCtrl.$inject = ['$scope', 'DataService'];
export default SummaryCtrl;

///////

