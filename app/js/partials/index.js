import angular from 'angular'; export default angular.module('app.partials', []).run(['$templateCache', function($templateCache) {$templateCache.put('layout/app-view.html','  <div class="app app-header-fixed ">\n\n\n      <!-- header -->\n    <header id="header" class="app-header navbar" role="menu">\n        <!-- navbar header -->\n        <div class="navbar-header bg-dark">\n          <button class="pull-right visible-xs dk" ui-toggle-class="show" target=".navbar-collapse">\n            <i class="glyphicon glyphicon-cog"></i>\n          </button>\n          <button class="pull-right visible-xs" ui-toggle-class="off-screen" target=".app-aside" ui-scroll="app">\n            <i class="glyphicon glyphicon-align-justify"></i>\n          </button>\n          <!-- brand -->\n          <a href="#/" class="navbar-brand text-lt">\n            <i class="fa fa-btc"></i>\n            <img src="img/logo.png" alt="." class="hide">\n            <span class="hidden-folded m-l-xs">Angulr</span>\n          </a>\n          <!-- / brand -->\n        </div>\n        <!-- / navbar header -->\n\n        <!-- navbar collapse -->\n        <div class="collapse pos-rlt navbar-collapse box-shadow bg-white-only">\n          <!-- buttons -->\n          <div class="nav navbar-nav hidden-xs">\n            <a href="#" class="btn no-shadow navbar-btn" ui-toggle-class="app-aside-folded" target=".app">\n              <i class="fa fa-dedent fa-fw text"></i>\n              <i class="fa fa-indent fa-fw text-active"></i>\n            </a>\n            <a href="#" class="btn no-shadow navbar-btn" ui-toggle-class="show" target="#aside-user">\n              <i class="icon-user fa-fw"></i>\n            </a>\n          </div>\n          <!-- / buttons -->\n\n          <!-- link and dropdown -->\n          <ul class="nav navbar-nav hidden-sm">\n            <li class="dropdown pos-stc">\n              <a href="#" data-toggle="dropdown" class="dropdown-toggle">\n                <span>Mega</span>\n                <span class="caret"></span>\n              </a>\n              <div class="dropdown-menu wrapper w-full bg-white">\n                <div class="row">\n                  <div class="col-sm-4">\n                    <div class="m-l-xs m-t-xs m-b-xs font-bold">Pages <span class="badge badge-sm bg-success">10</span></div>\n                    <div class="row">\n                      <div class="col-xs-6">\n                        <ul class="list-unstyled l-h-2x">\n                          <li>\n                            <a href><i class="fa fa-fw fa-angle-right text-muted m-r-xs"></i>Profile</a>\n                          </li>\n                          <li>\n                            <a href><i class="fa fa-fw fa-angle-right text-muted m-r-xs"></i>Post</a>\n                          </li>\n                          <li>\n                            <a href><i class="fa fa-fw fa-angle-right text-muted m-r-xs"></i>Search</a>\n                          </li>\n                          <li>\n                            <a href><i class="fa fa-fw fa-angle-right text-muted m-r-xs"></i>Invoice</a>\n                          </li>\n                        </ul>\n                      </div>\n                      <div class="col-xs-6">\n                        <ul class="list-unstyled l-h-2x">\n                          <li>\n                            <a href><i class="fa fa-fw fa-angle-right text-muted m-r-xs"></i>Price</a>\n                          </li>\n                          <li>\n                            <a href><i class="fa fa-fw fa-angle-right text-muted m-r-xs"></i>Lock screen</a>\n                          </li>\n                          <li>\n                            <a href><i class="fa fa-fw fa-angle-right text-muted m-r-xs"></i>Sign in</a>\n                          </li>\n                          <li>\n                            <a href><i class="fa fa-fw fa-angle-right text-muted m-r-xs"></i>Sign up</a>\n                          </li>\n                        </ul>\n                      </div>\n                    </div>\n                  </div>\n                  <div class="col-sm-4 b-l b-light">\n                    <div class="m-l-xs m-t-xs m-b-xs font-bold">UI Kits <span class="label label-sm bg-primary">12</span></div>\n                    <div class="row">\n                      <div class="col-xs-6">\n                        <ul class="list-unstyled l-h-2x">\n                          <li>\n                            <a href><i class="fa fa-fw fa-angle-right text-muted m-r-xs"></i>Buttons</a>\n                          </li>\n                          <li>\n                            <a href><i class="fa fa-fw fa-angle-right text-muted m-r-xs"></i>Icons <span class="badge badge-sm bg-warning">1000+</span></a>\n                          </li>\n                          <li>\n                            <a href><i class="fa fa-fw fa-angle-right text-muted m-r-xs"></i>Grid</a>\n                          </li>\n                          <li>\n                            <a href><i class="fa fa-fw fa-angle-right text-muted m-r-xs"></i>Widgets</a>\n                          </li>\n                        </ul>\n                      </div>\n                      <div class="col-xs-6">\n                        <ul class="list-unstyled l-h-2x">\n                          <li>\n                            <a href><i class="fa fa-fw fa-angle-right text-muted m-r-xs"></i>Bootstap</a>\n                          </li>\n                          <li>\n                            <a href><i class="fa fa-fw fa-angle-right text-muted m-r-xs"></i>Sortable</a>\n                          </li>\n                          <li>\n                            <a href><i class="fa fa-fw fa-angle-right text-muted m-r-xs"></i>Portlet</a>\n                          </li>\n                          <li>\n                            <a href><i class="fa fa-fw fa-angle-right text-muted m-r-xs"></i>Timeline</a>\n                          </li>\n                        </ul>\n                      </div>\n                    </div>\n                  </div>\n                  <div class="col-sm-4 b-l b-light">\n                    <div class="m-l-xs m-t-xs m-b-sm font-bold">Analysis</div>\n                    <div class="text-center">\n                      <div class="inline">\n                        <div ui-jq="easyPieChart" ui-options="{\n                            percent: 65,\n                            lineWidth: 50,\n                            trackColor: \'#e8eff0\',\n                            barColor: \'#23b7e5\',\n                            scaleColor: false,\n                            size: 100,\n                            rotate: 90,\n                            lineCap: \'butt\',\n                            animate: 2000\n                          }">\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </li>\n            <li class="dropdown">\n              <a href="#" data-toggle="dropdown" class="dropdown-toggle">\n                <i class="fa fa-fw fa-plus visible-xs-inline-block"></i>\n                <span translate="header.navbar.new.NEW">New</span> <span class="caret"></span>\n              </a>\n              <ul class="dropdown-menu" role="menu">\n                <li><a href="#" translate="header.navbar.new.PROJECT">Projects</a></li>\n                <li>\n                  <a href>\n                    <span class="badge bg-info pull-right">5</span>\n                    <span translate="header.navbar.new.TASK">Task</span>\n                  </a>\n                </li>\n                <li><a href translate="header.navbar.new.USER">User</a></li>\n                <li class="divider"></li>\n                <li>\n                  <a href>\n                    <span class="badge bg-danger pull-right">4</span>\n                    <span translate="header.navbar.new.EMAIL">Email</span>\n                  </a>\n                </li>\n              </ul>\n            </li>\n          </ul>\n          <!-- / link and dropdown -->\n\n          <!-- search form -->\n          <form class="navbar-form navbar-form-sm navbar-left shift" ui-shift="prependTo" data-target=".navbar-collapse" role="search" ng-controller="TypeaheadDemoCtrl">\n            <div class="form-group">\n              <div class="input-group">\n                <input type="text" ng-model="selected" typeahead="state for state in states | filter:$viewValue | limitTo:8" class="form-control input-sm bg-light no-border rounded padder" placeholder="Search projects...">\n                <span class="input-group-btn">\n                  <button type="submit" class="btn btn-sm bg-light rounded"><i class="fa fa-search"></i></button>\n                </span>\n              </div>\n            </div>\n          </form>\n          <!-- / search form -->\n\n          <!-- nabar right -->\n          <ul class="nav navbar-nav navbar-right">\n            <li class="dropdown">\n              <a href="#" data-toggle="dropdown" class="dropdown-toggle">\n                <i class="icon-bell fa-fw"></i>\n                <span class="visible-xs-inline">Notifications</span>\n                <span class="badge badge-sm up bg-danger pull-right-xs">2</span>\n              </a>\n              <!-- dropdown -->\n              <div class="dropdown-menu w-xl animated fadeInUp">\n                <div class="panel bg-white">\n                  <div class="panel-heading b-light bg-light">\n                    <strong>You have <span>2</span> notifications</strong>\n                  </div>\n                  <div class="list-group">\n                    <a href class="list-group-item">\n                      <span class="pull-left m-r thumb-sm">\n                        <img src="img/a0.jpg" alt="..." class="img-circle">\n                      </span>\n                      <span class="clear block m-b-none">\n                        Use awesome animate.css<br>\n                        <small class="text-muted">10 minutes ago</small>\n                      </span>\n                    </a>\n                    <a href class="list-group-item">\n                      <span class="clear block m-b-none">\n                        1.0 initial released<br>\n                        <small class="text-muted">1 hour ago</small>\n                      </span>\n                    </a>\n                  </div>\n                  <div class="panel-footer text-sm">\n                    <a href class="pull-right"><i class="fa fa-cog"></i></a>\n                    <a href="#notes" data-toggle="class:show animated fadeInRight">See all the notifications</a>\n                  </div>\n                </div>\n              </div>\n              <!-- / dropdown -->\n            </li>\n            <li class="dropdown">\n              <a href="#" data-toggle="dropdown" class="dropdown-toggle clear" data-toggle="dropdown">\n                <span class="thumb-sm avatar pull-right m-t-n-sm m-b-n-sm m-l-sm">\n                  <img src="img/a0.jpg" alt="...">\n                  <i class="on md b-white bottom"></i>\n                </span>\n                <span class="hidden-sm hidden-md">John.Smith</span> <b class="caret"></b>\n              </a>\n              <!-- dropdown -->\n              <ul class="dropdown-menu animated fadeInRight w">\n                <li class="wrapper b-b m-b-sm bg-light m-t-n-xs">\n                  <div>\n                    <p>300mb of 500mb used</p>\n                  </div>\n                  <div class="progress progress-xs m-b-none dker">\n                    <div class="progress-bar progress-bar-info" data-toggle="tooltip" data-original-title="50%" style="width: 50%"></div>\n                  </div>\n                </li>\n                <li>\n                  <a href>\n                    <span class="badge bg-danger pull-right">30%</span>\n                    <span>Settings</span>\n                  </a>\n                </li>\n                <li>\n                  <a ui-sref="app.page.profile">Profile</a>\n                </li>\n                <li>\n                  <a ui-sref="app.docs">\n                    <span class="label bg-info pull-right">new</span>\n                    Help\n                  </a>\n                </li>\n                <li class="divider"></li>\n                <li>\n                  <a ui-sref="access.signin">Logout</a>\n                </li>\n              </ul>\n              <!-- / dropdown -->\n            </li>\n          </ul>\n          <!-- / navbar right -->\n        </div>\n        <!-- / navbar collapse -->\n    </header>\n    <!-- / header -->\n\n\n      <!-- aside -->\n    <aside id="aside" class="app-aside hidden-xs bg-dark">\n        <div class="aside-wrap">\n          <div class="navi-wrap">\n            <!-- user -->\n            <div class="clearfix hidden-xs text-center hide" id="aside-user">\n              <div class="dropdown wrapper">\n                <a href="app.page.profile">\n                  <span class="thumb-lg w-auto-folded avatar m-t-sm">\n                    <img src="img/a0.jpg" class="img-full" alt="...">\n                  </span>\n                </a>\n                <a href="#" data-toggle="dropdown" class="dropdown-toggle hidden-folded">\n                  <span class="clear">\n                    <span class="block m-t-sm">\n                      <strong class="font-bold text-lt">John.Smith</strong>\n                      <b class="caret"></b>\n                    </span>\n                    <span class="text-muted text-xs block">Art Director</span>\n                  </span>\n                </a>\n                <!-- dropdown -->\n                <ul class="dropdown-menu animated fadeInRight w hidden-folded">\n                  <li class="wrapper b-b m-b-sm bg-info m-t-n-xs">\n                    <span class="arrow top hidden-folded arrow-info"></span>\n                    <div>\n                      <p>300mb of 500mb used</p>\n                    </div>\n                    <div class="progress progress-xs m-b-none dker">\n                      <div class="progress-bar bg-white" data-toggle="tooltip" data-original-title="50%" style="width: 50%"></div>\n                    </div>\n                  </li>\n                  <li>\n                    <a href>Settings</a>\n                  </li>\n                  <li>\n                    <a href="page_profile.html">Profile</a>\n                  </li>\n                  <li>\n                    <a href>\n                      <span class="badge bg-danger pull-right">3</span>\n                      Notifications\n                    </a>\n                  </li>\n                  <li class="divider"></li>\n                  <li>\n                    <a href="page_signin.html">Logout</a>\n                  </li>\n                </ul>\n                <!-- / dropdown -->\n              </div>\n              <div class="line dk hidden-folded"></div>\n            </div>\n            <!-- / user -->\n\n            <!-- nav -->\n            <nav ui-nav class="navi clearfix">\n              <ul class="nav">\n                <li class="hidden-folded padder m-t m-b-sm text-muted text-xs">\n                  <span>Navigation</span>\n                </li>\n                <li>\n                  <a href class="auto">\n                    <span class="pull-right text-muted">\n                      <i class="fa fa-fw fa-angle-right text"></i>\n                      <i class="fa fa-fw fa-angle-down text-active"></i>\n                    </span>\n                    <i class="glyphicon glyphicon-stats icon text-primary-dker"></i>\n                    <span class="font-bold">Dashboard</span>\n                  </a>\n                  <ul class="nav nav-sub dk">\n                    <li class="nav-sub-header">\n                      <a href>\n                        <span>Dashboard</span>\n                      </a>\n                    </li>\n                    <li>\n                      <a href="index.html">\n                        <span>Dashboard v1</span>\n                      </a>\n                    </li>\n                    <li>\n                      <a href="dashboard.html">\n                        <b class="label bg-info pull-right">N</b>\n                        <span>Dashboard v2</span>\n                      </a>\n                    </li>\n                  </ul>\n                </li>\n                <li>\n                  <a href="mail.html">\n                    <b class="badge bg-info pull-right">9</b>\n                    <i class="glyphicon glyphicon-envelope icon text-info-lter"></i>\n                    <span class="font-bold">Email</span>\n                  </a>\n                </li>\n                <li class="line dk"></li>\n\n                <li class="hidden-folded padder m-t m-b-sm text-muted text-xs">\n                  <span>Components</span>\n                </li>\n                <li>\n                  <a href class="auto">\n                    <span class="pull-right text-muted">\n                      <i class="fa fa-fw fa-angle-right text"></i>\n                      <i class="fa fa-fw fa-angle-down text-active"></i>\n                    </span>\n                    <b class="badge bg-info pull-right">3</b>\n                    <i class="glyphicon glyphicon-th"></i>\n                    <span>Layout</span>\n                  </a>\n                  <ul class="nav nav-sub dk">\n                    <li class="nav-sub-header">\n                      <a href>\n                        <span>Layout</span>\n                      </a>\n                    </li>\n                    <li>\n                      <a href="layout_app.html">\n                        <span>Application</span>\n                      </a>\n                    </li>\n                    <li>\n                      <a href="layout_fullwidth.html">\n                        <span>Full width</span>\n                      </a>\n                    </li>\n                    <li>\n                      <a href="layout_boxed.html">\n                        <span>Boxed layout</span>\n                      </a>\n                    </li>\n                  </ul>\n                </li>\n                <li>\n                  <a href class="auto">\n                    <span class="pull-right text-muted">\n                      <i class="fa fa-fw fa-angle-right text"></i>\n                      <i class="fa fa-fw fa-angle-down text-active"></i>\n                    </span>\n                    <i class="glyphicon glyphicon-briefcase icon"></i>\n                    <span>UI Kits</span>\n                  </a>\n                  <ul class="nav nav-sub dk">\n                    <li class="nav-sub-header">\n                      <a href>\n                        <span>UI Kits</span>\n                      </a>\n                    </li>\n                    <li>\n                      <a href="ui_button.html">\n                        <span>Buttons</span>\n                      </a>\n                    </li>\n                    <li>\n                      <a href="ui_icon.html">\n                        <b class="badge bg-info pull-right">3</b>\n                        <span>Icons</span>\n                      </a>\n                    </li>\n                    <li>\n                      <a href="ui_grid.html">\n                        <span>Grid</span>\n                      </a>\n                    </li>\n                    <li>\n                      <a href="ui_widget.html">\n                        <b class="badge bg-success pull-right">13</b>\n                        <span>Widgets</span>\n                      </a>\n                    </li>\n                    <li>\n                      <a href="ui_sortable.html">\n                        <span>Sortable</span>\n                      </a>\n                    </li>\n                    <li>\n                      <a href="ui_portlet.html">\n                        <span>Portlet</span>\n                      </a>\n                    </li>\n                    <li>\n                      <a href="ui_timeline.html">\n                        <span>Timeline</span>\n                      </a>\n                    </li>\n                    <li>\n                      <a href="ui_jvectormap.html">\n                        <span>Vector Map</span>\n                      </a>\n                    </li>\n                  </ul>\n                </li>\n                <li>\n                  <a href class="auto">\n                    <span class="pull-right text-muted">\n                      <i class="fa fa-fw fa-angle-right text"></i>\n                      <i class="fa fa-fw fa-angle-down text-active"></i>\n                    </span>\n                    <b class="label bg-primary pull-right">2</b>\n                    <i class="glyphicon glyphicon-list"></i>\n                    <span>Table</span>\n                  </a>\n                  <ul class="nav nav-sub dk">\n                    <li class="nav-sub-header">\n                      <a href>\n                        <span>Table</span>\n                      </a>\n                    </li>\n                    <li>\n                      <a href="table_static.html">\n                        <span>Table static</span>\n                      </a>\n                    </li>\n                    <li>\n                      <a href="table_datatable.html">\n                        <span>Datatable</span>\n                      </a>\n                    </li>\n                    <li>\n                      <a href="table_footable.html">\n                        <span>Footable</span>\n                      </a>\n                    </li>\n                  </ul>\n                </li>\n                <li>\n                  <a href class="auto">\n                    <span class="pull-right text-muted">\n                      <i class="fa fa-fw fa-angle-right text"></i>\n                      <i class="fa fa-fw fa-angle-down text-active"></i>\n                    </span>\n                    <i class="glyphicon glyphicon-edit"></i>\n                    <span>Form</span>\n                  </a>\n                  <ul class="nav nav-sub dk">\n                    <li class="nav-sub-header">\n                      <a href>\n                        <span>Form</span>\n                      </a>\n                    </li>\n                    <li>\n                      <a href="form_element.html">\n                        <span>Form elements</span>\n                      </a>\n                    </li>\n                  </ul>\n                </li>\n                <li>\n                  <a href="ui_chart.html">\n                    <i class="glyphicon glyphicon-signal"></i>\n                    <span>Chart</span>\n                  </a>\n                </li>\n                <li>\n                  <a href class="auto">\n                    <span class="pull-right text-muted">\n                      <i class="fa fa-fw fa-angle-right text"></i>\n                      <i class="fa fa-fw fa-angle-down text-active"></i>\n                    </span>\n                    <i class="glyphicon glyphicon-file icon"></i>\n                    <span>Pages</span>\n                  </a>\n                  <ul class="nav nav-sub dk">\n                    <li class="nav-sub-header">\n                      <a href>\n                        <span>Pages</span>\n                      </a>\n                    </li>\n                    <li>\n                      <a href="page_profile.html">\n                        <span>Profile</span>\n                      </a>\n                    </li>\n                    <li>\n                      <a href="page_post.html">\n                        <span>Post</span>\n                      </a>\n                    </li>\n                    <li>\n                      <a href="page_search.html">\n                        <span>Search</span>\n                      </a>\n                    </li>\n                    <li>\n                      <a href="page_invoice.html">\n                        <span>Invoice</span>\n                      </a>\n                    </li>\n                    <li>\n                      <a href="page_price.html">\n                        <span>Price</span>\n                      </a>\n                    </li>\n                    <li>\n                      <a href="page_lockme.html">\n                        <span>Lock screen</span>\n                      </a>\n                    </li>\n                    <li>\n                      <a href="page_signin.html">\n                        <span>Signin</span>\n                      </a>\n                    </li>\n                    <li>\n                      <a href="page_signup.html">\n                        <span>Signup</span>\n                      </a>\n                    </li>\n                    <li>\n                      <a href="page_forgotpwd.html">\n                        <span>Forgot password</span>\n                      </a>\n                    </li>\n                    <li>\n                      <a href="page_404.html">\n                        <span>404</span>\n                      </a>\n                    </li>\n                  </ul>\n                </li>\n\n                <li class="line dk hidden-folded"></li>\n\n                <li class="hidden-folded padder m-t m-b-sm text-muted text-xs">\n                  <span>Your Stuff</span>\n                </li>\n                <li>\n                  <a href="page_profile.html">\n                    <i class="icon-user icon text-success-lter"></i>\n                    <b class="badge bg-success pull-right">30%</b>\n                    <span>Profile</span>\n                  </a>\n                </li>\n                <li>\n                  <a href>\n                    <i class="icon-question icon"></i>\n                    <span>Documents</span>\n                  </a>\n                </li>\n              </ul>\n            </nav>\n            <!-- nav -->\n\n            <!-- aside footer -->\n            <div class="wrapper m-t">\n              <div class="text-center-folded">\n                <span class="pull-right pull-none-folded">60%</span>\n                <span class="hidden-folded">Milestone</span>\n              </div>\n              <div class="progress progress-xxs m-t-sm dk">\n                <div class="progress-bar progress-bar-info" style="width: 60%;">\n                </div>\n              </div>\n              <div class="text-center-folded">\n                <span class="pull-right pull-none-folded">35%</span>\n                <span class="hidden-folded">Release</span>\n              </div>\n              <div class="progress progress-xxs m-t-sm dk">\n                <div class="progress-bar progress-bar-primary" style="width: 35%;">\n                </div>\n              </div>\n            </div>\n            <!-- / aside footer -->\n          </div>\n        </div>\n    </aside>\n    <!-- / aside -->\n\n\n    <!-- content -->\n    <div id="content" class="app-content" role="main">\n    \t<div class="app-content-body ">\n\n\n  <div class="hbox hbox-auto-xs hbox-auto-sm">\n    <!-- .col -->\n    <div class="col w-lg bg-light dk b-r bg-auto" id="aside">\n      <div class="wrapper bg b-b">\n        <button class="btn btn-sm btn-success pull-right" ui-toggle-class="timeline-center" target=".timeline">Center</button>\n        <h3 class="m-n font-thin">Timeline</h3>\n      </div>\n      <div class="wrapper">\n        <form>\n          <div class="form-group">\n            <label>Name</label>\n            <input type="text" placeholder="Event name" class="input-sm form-control">\n          </div>\n          <div class="form-group">\n            <label>Date</label>\n            <input type="text" placeholder="Event name" class="input-sm form-control">\n          </div>\n          <div class="form-group">\n            <label>Time</label>\n            <input type="text" placeholder="eg. 3:00 pm" class="input-sm form-control">\n          </div>\n          <div class="form-group">\n            <label>Type</label>\n            <div>\n              <div class="btn-group dropdown" dropdown>\n                <button class="btn btn-sm btn-default dropdown-toggle" dropdown-toggle>\n                  <span class="dropdown-label">Choose a type</span>\n                  <span class="caret"></span>\n                </button>\n                <ul class="dropdown-menu">\n                  <li><a href>Travel</a></li>\n                  <li><a href>Phone</a></li>\n                  <li><a href>Meeting</a></li>\n                  <li><a href>Appointment</a></li>\n                </ul>\n              </div>\n            </div>\n          </div>\n          <div class="m-t-md m-b-md"><button class="btn btn-sm btn-primary">Add an event</button></div>\n        </form>\n      </div>\n    </div>\n    <!-- /.col -->\n    <!-- .col -->\n    <div class="col">\n      <div class="wrapper">\n        <ul class="timeline">\n          <li class="tl-header">\n            <div class="btn btn-info">Now</div>\n          </li>\n          <li class="tl-item">\n            <div class="tl-wrap b-info">\n              <span class="tl-date">5s ago</span>\n              <div class="tl-content">\n                Just a title\n              </div>\n            </div>\n          </li>\n          <li class="tl-item">\n            <div class="tl-wrap">\n              <span class="tl-date">2h ago</span>\n              <div class="tl-content panel padder b-a">\n                <span class="arrow left pull-up"></span>\n                <div>Content in a panel</div>\n              </div>\n            </div>\n          </li>\n          <li class="tl-item tl-left">\n            <div class="tl-wrap b-success">\n              <span class="tl-date">7:30 am</span>\n              <div class="tl-content panel bg-success padder">\n                <span class="arrow arrow-success left pull-up hidden-left"></span>\n                <span class="arrow arrow-success right pull-up visible-left"></span>\n                <div class="text-lt">Oh! Colorful</div>\n              </div>\n            </div>\n          </li>\n          <li class="tl-item">\n            <div class="tl-wrap b-primary">\n              <span class="tl-date">04.2014</span>\n              <div class="tl-content panel padder b-a w-md w-auto-xs">\n                <span class="arrow left pull-up"></span>\n                <div class="text-lt m-b-sm">With Title</div>\n                <div class="panel-body pull-in b-t b-light">\n                  <a href="" class="thumb pull-right m-l m-t-xs avatar">\n                    <img src="img/a4.jpg" alt="...">\n                    <i class="on md b-white bottom"></i>\n                  </a>\n                  <div class="clear">\n                    <a href="" class="text-primary block m-b-xs">@Mike Mcalidek <i class="icon-twitter"></i></a>\n                    <a href="" class="btn btn-addon btn-sm btn-primary m-t-xs"><i class="fa fa-eye"></i> Follow</a>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </li>\n          <li class="tl-item tl-left">\n            <div class="tl-wrap b-primary">\n              <span class="tl-date">04.2014</span>\n              <div class="tl-content panel padder b-a block">\n                <span class="arrow left pull-up hidden-left"></span>\n                <span class="arrow right pull-up visible-left"></span>\n                <div class="text-lt m-b-sm">Block</div>\n                <div class="panel-body pull-in b-t b-light">\n                  <p>I\'m working on a realy amazing application, It will be available soon. here is a little tease. </p>\n                  <div class="m-b m-t">\n                    <a href class="avatar thumb-xs m-r-xs">\n                      <img src="img/a7.jpg" alt="...">\n                      <i class="on b-white left"></i>\n                    </a>\n                    <a href class="avatar thumb-xs m-r-xs">\n                      <img src="img/a8.jpg" alt="...">\n                      <i class="busy b-white left"></i>\n                    </a>\n                    <a href class="avatar thumb-xs m-r-xs">\n                      <img src="img/a9.jpg" alt="...">\n                      <i class="away b-white left"></i>\n                    </a>\n                    <a href class="avatar thumb-xs m-r-xs">\n                      <img src="img/a10.jpg" alt="...">\n                      <i class="on b-white left"></i>\n                    </a>\n                    <a href class="btn btn-success btn-rounded font-bold"> +152 </a>\n                    <span class="h5 m-l-sm">Liked</span>\n                  </div>\n                  <div class="panel panel-default m-t-md m-b-n-sm pos-rlt">\n                    <span class="arrow top pull-left"></span>\n                    <form>\n                      <textarea class="form-control no-border" rows="3" placeholder="Your comment..."></textarea>\n                    </form>\n                    <div class="panel-footer bg-light lter">\n                      <button class="btn btn-info pull-right btn-sm">Comment</button>\n                      <ul class="nav nav-pills nav-sm">\n                        <li><a href><i class="fa fa-camera text-muted"></i></a></li>\n                        <li><a href><i class="fa fa-video-camera text-muted"></i></a></li>\n                      </ul>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </li>\n          <li class="tl-header">\n            <div class="btn btn-sm btn-default btn-rounded">2014</div>\n          </li>\n          <li class="tl-item">\n            <div class="tl-wrap">\n              <span class="tl-date">10.08.2013</span>\n              <div class="tl-content panel padder b-a">\n                <span class="arrow left pull-up hidden-left"></span>\n                <span class="arrow right pull-up visible-left"></span>\n                <div class="text-lt">A good story to hear.</div>\n              </div>\n            </div>\n          </li>\n          <li class="tl-header">\n            <div class="btn btn-icon btn-rounded btn-default"><i class="fa fa-twitter"></i></div>\n          </li>\n          <li class="tl-item tl-left">\n            <div class="tl-wrap b-white">\n              <span class="tl-date">5.07.2013</span>\n              <div class="tl-content panel padder b-a">\n                <span class="arrow left pull-up hidden-left"></span>\n                <span class="arrow right pull-up visible-left"></span>\n                <div class="text-lt">Yesterday is History</div>\n              </div>\n            </div>\n          </li>\n          <li class="tl-header">\n            <div class="btn btn-sm btn-default btn-rounded">more</div>\n          </li>\n          <li class="tl-header">\n            UI VIEW\n          </li>\n          <li class="tl-item tl-left">\n            <div ui-view></div>\n          </li>\n        </ul>\n      </div>\n    </div>\n    <!-- /.col -->\n  </div>\n\n\n  \t</div>\n    </div>\n    <!-- /content -->\n\n    <!-- footer -->\n    <footer id="footer" class="app-footer" role="footer">\n      <div class="wrapper b-t bg-light">\n        <span class="pull-right">2.2.0 <a href ui-scroll="app" class="m-l-sm text-muted"><i class="fa fa-long-arrow-up"></i></a></span>\n        &copy; 2016 Copyright.\n      </div>\n    </footer>\n    <!-- / footer -->\n\n  </div>\n');
$templateCache.put('home/home.html','<h2>Users</h2>\n\n<table>\n    <thead>\n      <th>Name</th>\n      <th>Surname</th>\n      <th>Github</th>\n    </thead>\n    <tbody>\n      <tr ng-repeat="user in $ctrl.users">\n        <td>\n          {{user.name}}\n        </td>\n        <td>\n          {{user.surname}}\n        </td>\n        <td>\n          {{user.github}}\n        </td>\n      </tr>\n    </tbody>\n</table>\n');}]);