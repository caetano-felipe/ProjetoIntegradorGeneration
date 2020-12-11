import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { CategoriaComponent } from './categoria/categoria.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProdutoComponent } from './produto/produto.component';
import { CadastroProdutoComponent } from './cadastro-produto/cadastro-produto.component';
import { PutCategoriaComponent } from './put-categoria/put-categoria.component';
import { DeleteCategoriaComponent } from './delete-categoria/delete-categoria.component';
import { PutProdutoComponent } from './put-produto/put-produto.component';
import { DeleteProdutoComponent } from './delete-produto/delete-produto.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch:'full' },
  { path: 'home', component: HomeComponent},
  { path: 'about', component: AboutComponent},
  { path: 'login', component: LoginComponent},
  { path: 'cadastrar', component: CadastroComponent},
  { path: 'servico', component: ProdutoComponent},
  { path: 'categoria', component: CategoriaComponent },
  { path: 'cadastro-servico', component: CadastroProdutoComponent},
  { path: 'editar-categoria/:id', component: PutCategoriaComponent},
  { path: 'delete-categoria/:id', component: DeleteCategoriaComponent},
  { path: 'editar-produto/:id', component: PutProdutoComponent},
  { path: 'delete-produto/:id', component: DeleteProdutoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
