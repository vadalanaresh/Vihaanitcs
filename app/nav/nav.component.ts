import { Component } from '@angular/core';

@Component({
  selector: 'nav-bar',
  template:
  ` <nav id="mainNav" class="navbar navbar-default navbar-inverse navbar-fixed-top">
        <div class="container">
            <!-- Brand and toggle get grouped for better mobile display -->
            <div class="navbar-header ">
                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                    <span class="sr-only">Toggle navigation</span> Menu <i class="fa fa-bars"></i>
                </button>
                <a class="navbar-brand" href="#page-top">Vihaan ITCS</a>
            </div>
            <!-- Collect the nav links, forms, and other content for toggling -->
            <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul class="nav navbar-nav navbar-right">
                    <li class="hidden">
                        <a href="#page-top"></a>
                    </li>
                    <li>
                        <a  href="#products">Products</a>
                    </li>
                    <li>
                        <a  href="#services">Services</a>
                    </li>
                    <li>
                        <a  href="#training">Training</a>
                    </li>
                    <li>
                        <a  href="#placements">Placements</a>
                    </li>
                    <li>
                        <a  href="#about">About</a>
                    </li>
                    <li>
                        <a  href="#contact">Contact</a>
                    </li>
                </ul>
            </div>
            <!-- /.navbar-collapse -->
        </div>
        <!-- /.container-fluid -->
    </nav>
`
})
export class NavbarComponent {

}