import './summary.css';

class SummaryCtrl {
    
    // constructor ($scope, CoolNumberLovingService) {
    //     this.coolNumber = 42;
    //     this.$scope = $scope;
    //     this.numberLover = CoolNumberLovingService;
    //     this.$scope.$watch('coolNumber', this.coolNumberChanged());
    // }

    // coolNumberChanged (newValue, oldValue) {
    //     return () => {
    //         this.numberLover.itHasChanged(newValue, oldValue);
    //     };
    // }
    
    constructor($scope, DataFactory) {

        $scope = $scope;
        $scope.title = 'Summary';
        $scope.loaded = DataFactory.loaded;
        
        $scope.$watch('DataFactory', function() {
            console.log('=== watch changed ===');
            $scope.loaded = DataFactory.loaded;
        });
        // $scope.DataFactory = DataFactory;
        
        DataFactory.get();
        
        
       setTimeout(() => {
           console.log('4 seconds up');
           console.log(DataFactory.loaded);
           $scope.$apply(function(){
               $scope.loaded = DataFactory.loaded;
           })
           
       }, 4000);
        
    }
}

SummaryCtrl.$inject = ['$scope', 'DataFactory'];
export default SummaryCtrl;

///////

