
class DataService{
    constructor($rootScope) {
        console.log('==== DataService ===');
        // this.data = [];
        this.loaded = false;
        this.$rootScope = $rootScope;
        this.get();
    }
    get(){
        console.log('loading....');
        setTimeout(() => {
           this.$rootScope.$apply(() => {
               console.log('loaded');
               var tempArr = [1, 2, 3];
               this.set(tempArr); 
           });
           
        }, 2000);
    }
    set(arr){
        console.log('set');
        this.data = arr;
        console.log(this.data);
        this.loaded = true;
        console.log(this.loaded);
    }
}
DataService.$inject = ['$rootScope'];
export default DataService;