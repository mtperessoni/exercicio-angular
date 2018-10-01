import { AppRoutingModule } from './app-routing.module';

describe('AppRoutingModule', () => {
  let appRoutingModule: AppRoutingModule;

  beforeEach(() => {
    appRoutingModule = new AppRoutingModule();
  });

  it('Deve ser criado uma instância das Rotas.', () => {
    expect(appRoutingModule).toBeTruthy();
  });
});
