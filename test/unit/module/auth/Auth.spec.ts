describe('app.auth', () => {

  beforeEach(module('app.auth'));

  describe('Login controller', () => {

    it('should be defined', inject(($controller:any) => {
      const authCtrl:AuthController = $controller('LoginCtrl');
      expect(authCtrl).toBeDefined();
    }));

  });

});
