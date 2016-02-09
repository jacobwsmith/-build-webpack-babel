function service($rootScope) {
    var obj = {
        loaded: false,
        data: [],
        get: function() {
            console.log('loading....');
            setTimeout(() => {
                $rootScope.$apply(() => {
                    console.log('loaded');
                    var tempArr = [1, 2, 3];
                    this.set(tempArr);
                });
            }, 2000);
        },
        set: function(arr) {
            console.log('set');
            this.data = arr;
            this.loaded = true;
        }
    }
    return obj;
};
service.$inject = ['$rootScope'];
export default service;