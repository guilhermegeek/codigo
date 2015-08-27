angular.module("templates").run(["$templateCache", function($templateCache) {$templateCache.put("index.html","<html ng-app=\"codigo\">\n<head>\n    <meta charset=\"UTF-8\">\n    <link rel=\"stylesheet\" type=\"text/css\" href=\"http://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css\" />\n    <link rel=\"stylesheet\" href=\"//maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css\">\n    <link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/ng-tags-input/3.0.0/ng-tags-input.css\">\n    <!-- inject:css -->\n    <link rel=\"stylesheet\" href=\"dist/site.css\">\n    <!-- endinject -->\n    <!-- inject:js -->\n    <script src=\"dist/angular.js\"></script>\n    <script src=\"dist/app.js\"></script>\n    <script src=\"dist/app.min.js\"></script>\n    <script src=\"dist/dependencies.js\"></script>\n    <script src=\"dist/jquery.js\"></script>\n    <script src=\"dist/pi-angular.js\"></script>\n    <script src=\"dist/templates.js\"></script>\n    <!-- endinject -->\n</head>\n<body>\n  <div class=\"pi-nav__wrapper pi-nav__wrapper--fixed\">\n      <div class=\"pi-nav\">\n      <ul>\n            <li><a ui-sref=\"home\">codigo.ovh</a></li>\n            <li><a ui-sref=\"question-list\">Perguntas</a></li>\n            <li><a href=\"\">Gestão</a>\n                <ul>\n                    <li><a ui-sref=\"article-create\">Criar Artigo</a></li>\n                    <li><a ui-sref=\"category-list\">Categorias</a></li>\n                    <li><a ui-sref=\"category-create\">Criar Categoria</a></li>\n                </ul>\n            </li>\n\n        </ul>\n          <ul class=\"pi-list__right\">\n              <li>\n                  <form ng-submit=\"$root.search(searchModel)\">\n                      <div class=\"pi-form__btn-group\">\n                          <div class=\"pi-form__group\">\n                              <input type=\"text\" ng-model=\"searchModel\" placeholder=\"Pesquisar\" class=\"pi-form__control\" />\n                          </div>\n                          <div class=\"pi-form__group\">\n                              <button type=\"submit\" class=\"button-primary\"><i class=\"icon ion-android-search\"></i></button>\n                          </div>\n                      </div>\n                  </form>\n              </li>\n          </ul>\n          </div>\n  </div>\n  <div class=\"pi-nav__wrapper pi-nav__sub\">\n  <div class=\"pi-nav\">\n  <ul>\n    <li ng-repeat=\"cat in $root.categories\"><a ui-sref=\"article-list({categoryId: cat.id})\" ng-bind=\"cat.displayName\"></a></li>\n    </ul>\n    </div>\n  </div>\n  <div ng-show=\"current.name != \'home\'\" class=\"pi-breadcrumb\" pi-breadcrumb></div>\n\n\n  <div class=\"cod__view\">\n\n      <ui-view></ui-view>\n  </div>\n  <script type=\"text/ng-template\" id=\"html/pi/comment-window.html\">\n      <h3>Comentários</h3>\n      <div pi-comment-form></div>\n      <div ng-repeat=\"comment in comments | reverse\" pi-comment-message comment=\"comment\"></div>\n   </script>\n<script type=\"text/ng-template\" id=\"/html/pi/breadcrumb.html\">\n<div class=\"pi-breadcrumb__wrapper\">\n    <div class=\"pi-breadcrumb__side\">\n        &nbsp;\n    </div>\n    <!--<div class=\"pi-breadcrumb__feed\">\n        <div class=\"feed-photo-create\">\n            <div class=\"feed-photo-create\" feed-photo-create></div>\n            <!--<button class=\"feed-photo-create\" feed-animal-create></button>\n            <button class=\"feed-photo-create\" feed-running-create></button>\n            <button class=\"feed-photo-create\" feed-bike-create></button>-->\n        <!--</div>\n    </div>-->\n    <div class=\"pi-breadcrumb__nav\">\n        <button class=\"btn btn-primary btn-xs btn-transparent\" href=\"\" ng-click=\"previousState()\"><i class=\"fa fa-arrow-circle-left\"></i> Retroceder</a></button>\n        <button class=\"btn btn-primary btn-xs btn-transparent\" ng-repeat=\"item in $root.menuItems\" ng-if=\"item.isAnchor\" ui-sref=\"{{item.state}}\"><span class=\"subMenu-icon\" ng-if=\"item.icon\"><i class=\"{{item.icon}}\"></i> </span><span ng-bind=\"item.label\"></span></button>\n        <button class=\"btn btn-primary btn-xs btn-transparent\" ng-repeat=\"item in $root.menuItems\" ng-if=\"item.isButton && item != null\" href=\"#\" ng-click=\"item.action()\"><i class=\"{{item.icon}}\"></i> <span ng-bind=\"item.label\"></span></button>\n\n    </div>\n</div>\n</script>\n  <script type=\"text/ng-template\" id=\"html/pi/comment-message.html\">\n      <div class=\"comment-message\">\n          <a class=\"comment-message__author\" ui-sref=\"profile.home({id: comment.author.id})\">\n              <img class=\"comment-message__author-img\" ng-src=\"http://lorempixel.com/100/100/people/\" />\n          </a>\n          <div class=\"comment-message__body\">\n              <div><span ng-bind=\"comment.author.displayName\"></span><span class=\"comment-message__created\" ng-bind=\"comment.created\"></span></div>\n              <!--<div>aqui metiamos a sport phrase dele</div>-->\n              <div ng-bind=\"comment.message\"></div>\n          </div>\n      </div>\n  </script>\n  <script type=\"text/ng-template\" id=\"html/pi/comment-form.html\">\n      <div class=\"fit-form\" class=\"pi-comment-form\">\n          <form class=\"fit-form__group\" ng-submit=\"send(message)\">\n              <textarea rows=\"4\" ng-model=\"message\" class=\"fit-form__group-control\"></textarea>\n      </div>\n      <div class=\"fit-form__footer\">\n          <button type=\"button\" ng-click=\"send(message)\">Enviar Comentário</button>\n      </div>\n      </div>\n  </script>\n  <script type=\"text/ng-template\" id=\"html/upload-thumbnail.html\">\n      <div class=\"upload-thumbnail__btn\" ngf-select ngf-change=\"upload($files)\">\n          <div>Upload Foto</div>\n          <img ng-src=\"{{thumbnailSrc}}\">\n          <div ng-show=\"uploadProgress > 0 && uploadProgress < 100\">\n              A enviar... <!--{{ctrl.uploadProgress}} %-->\n          </div>\n      </div>\n</script>\n  <!--<div class=\"card-set__wrapper\">\n    <div class=\"card-set\" pi-class-hover=\"card-set--hover\">\n      <div class=\"card-set__img\">\n        <img src=\"http://2.bp.blogspot.com/-6hr2GQSaz4k/Vak3-MY5zeI/AAAAAAAAjmk/UIfcib4fdBk/s1600/Hacker-free-Frequent-Flyer-Miles-United-Airlines.jpg\" />\n        <div class=\"card-set__img-hover\">NSA Releases Open Source Network Security Tool for Linux</div>\n      </div>\n      <ul class=\"card-set__list\">\n        <li><a class=\"\">Primeiro Nome</a></li>\n        <li><a class=\"\">Primeiro Nome</a></li>\n        <li><a class=\"\">Primeiro Nome</a></li>\n      </ul>\n    </div>\n  </div>\n  <div class=\"profile-edit__wrapper\">\n    <div class=\"profile-edit__side\">\n      <ul class=\"list-group\">\n        <li>Primeiro Item</li>\n        <li>Primeiro Item</li>\n        <li>Primeiro Item</li>\n      </ul>\n    </div>\n    <div class=\"profile-edit__content\">\n      <div class=\"panel panel-default\">\n        <div class=\"panel-heading\">\n          <h4 class=\"panel-title\">Danger Panel</h4>\n        </div>\n        <div class=\"panel-body\">\n            <form class=\"pi-form\">\n                <div class=\"pi-form__group\">\n                  <label>O Primeiro Nome</label>\n                  <input type=\"text\" class=\"pi-form__control\" placeholder=\"Primeiro Nome\" />\n                </div>\n                <div class=\"pi-form__group\">\n                  <label>O Primeiro Nome</label>\n                  <input type=\"text\" class=\"pi-form__control\" placeholder=\"Primeiro Nome\" />\n                </div>\n                <div class=\"pi-form__group\">\n                  <label>O Primeiro Nome</label>\n                  <input type=\"text\" class=\"pi-form__control\" placeholder=\"Primeiro Nome\" />\n                </div>\n                <div class=\"pi-form__groups\">\n                  <div class=\"pi-form__group\">\n                    <label>O Primeiro Nome</label>\n                    <input type=\"text\" class=\"pi-form__control\" placeholder=\"Primeiro Nome\" />\n                  </div>\n                  <div class=\"pi-form__group\">\n                    <label>O Primeiro Nome</label>\n                    <input type=\"text\" class=\"pi-form__control\" placeholder=\"Primeiro Nome\" />\n                  </div>\n                </div>\n                <div class=\"pi-form__footer\">\n                  <button type=\"button\" class=\"button-primary\">Guardar Alteraçes</button>\n                </div>\n            </form>\n        </div>\n      </div>\n    </div>\n  <button class=\"button-primary button-block\">Add Sections</button>\n  <div class=\"card-set__wrapper\">\n      <div class=\"card-set\" ng-repeat=\"counter in $root.events track by $index\">\n        <div class=\"card-set__img\"><img src=\"http://beta.fitting.pt/uploads/user/default.jpg\" /></div>\n        <div class=\"card-set__list\">\n          <div class=\"card-set__list-avatar\"><img src=\"http://beta.fitting.pt/uploads/user/default.jpg\" /></div>\n          <div class=\"card-set__content\">Louos Pasdasd</div>\n      </div>\n      <div class=\"card-set__author\">\n          <div class=\"card-set__author-avatar\"><img src=\"http://beta.fitting.pt/uploads/user/default.jpg\" /></div>\n          <div class=\"card-set__author-likes\">178</div>\n      </div>\n    </div>\n  </div>\n  <div class=\"pi-footer__wrapper\">\n\n  </div>-->\n</body>\n</html>\n");
$templateCache.put("core/home.tpl.html","<div infinite-scroll=\"ctrl.query()\" infinite-scroll-disabled=\"ctrl.queryModel.busy\" infinite-scroll-immediate-check=\"true\" class=\"home__recent\">\n    <div ng-repeat=\"news in ctrl.news\"  codigo-article-card article=\"news\"></div>\n</div>");
$templateCache.put("core/article/article-card.tpl.html","<div class=\"pi-card\" pi-class-hover=\"pi-card--hover\">\n    <div class=\"pi-card__thumb\">\n        <a ng-style=\"{\'background-image\': \'url({{article.image}})\'}\" class=\"pi-card__thumb-anchor\" ui-sref=\"article-view({id: article.id})\"></a>\n        <div class=\"pi-card__content\">\n        <p ng-bind=\"article.headline\"></p>\n        <ul class=\"pi-card__social-list\">\n            <li>\n                <a href=\"#\" socialshare socialshare-provider=\"linkedin\" socialshare-text=\"{{article.headline}}\" socialshare-url=\"http://720kb.net\"><i class=\"icon ion-social-linkedin-outline\"></i></a>\n            </li>\n            <li>\n                <a href=\"#\" socialshare socialshare-provider=\"facebook\" socialshare-text=\"{{article.headline}}\" socialshare-url=\"http://720kb.net\"><i class=\"icon ion-social-facebook-outline\"></i></a>\n            </li>\n            <li>\n                <a href=\"#\" socialshare socialshare-provider=\"twitter\" socialshare-text=\"{{article.headline}}\" socialshare-url=\"http://720kb.net\"><i class=\"icon ion-social-twitter-outline\"></i></a>\n            </li>\n            <li>\n                <a href=\"#\" socialshare socialshare-provider=\"pinterest\" socialshare-text=\"{{article.headline}}\" socialshare-url=\"http://720kb.net\"><i class=\"icon ion-social-pinterest-outline\"></i></a>\n            </li>\n            <li>\n                <a href=\"#\" socialshare socialshare-provider=\"google+\" socialshare-text=\"{{article.headline}}\" socialshare-url=\"http://720kb.net\"><i class=\"icon ion-social-google-outline\"></i></a>\n            </li>\n            <li>\n                <a href=\"#\" socialshare socialshare-provider=\"tumblr\" socialshare-text=\"{{article.headline}}\" socialshare-url=\"http://720kb.net\"><i class=\"icon ion-social-tumblr-outline\"></i></a>\n            </li>\n            <li>\n                <a href=\"#\" socialshare socialshare-provider=\"reddit\" socialshare-text=\"{{article.headline}}\" socialshare-url=\"http://720kb.net\"><i class=\"icon ion-social-reddit-outline\"></i></a>\n            </li>\n        </ul>\n        </div>\n    </div>\n    <a class=\"pi-card__title\" ui-sref=\"article-view({id: article.id})\" ng-bind=\"article.name\"></a>\n    <div class=\"pi-card__date\"> há 3 horas</div>\n</div>");
$templateCache.put("core/article/article-create.tpl.html","<div class=\"sportsnews-create__wrapper\">\n    <div class=\"sportsnews-create__side\">\n        <div class=\"upload-thumbnail\" upload-thumbnail ng-model=\"ctrl.model.image\"></div>\n    </div>\n    <div class=\"sportsnews-create__content\">\n        <div class=\"pi-form__wrapper\">\n            <form class=\"fit-form\" name=\"createForm\">\n                <div class=\"pi-form__group\">\n                    <input class=\"pi-form__control\" type=\"text\" required class=\"pi-form__group-control\" placeholder=\"Título da Notícia\" ng-model=\"ctrl.model.name\" />\n                </div>\n                <div class=\"pi-form__group\">\n                    <ui-select required ng-model=\"ctrl.categorySelect\" theme=\"selectize\">\n                        <ui-select-match placeholder=\"Localidade\">{{$select.selected.displayName}}</ui-select-match>\n                        <ui-select-choices repeat=\"cat in $root.categories | filter: $select.search\">\n                            <span ng-bind=\"cat.displayName | highlight: $select.search\"></span>\n                        </ui-select-choices>\n                    </ui-select>\n                </div>\n                <div class=\"pi-form__group\">\n                    <tags-input ng-model=\"ctrl.model.keywords\"></tags-input>\n                </div>\n                <div class=\"pi-form__group\">\n                    <input placeholder=\"Um exerpto da Notícia\" required class=\"pi-form__control\" type=\"text\" ng-model=\"ctrl.model.headline\" />\n                </div>\n                <div class=\"pi-form__group\">\n                    <div placeholder=\"O conteúdo principal da Notícia\" text-angular  ng-model=\"ctrl.model.articleBody\"></div>\n                </div>\n                <div class=\"pi-form__footer\">\n                    <button ng-disabled=\"createForm.$invalid || createForm.$pristine\" ng-click=\"ctrl.create()\">Criar</button>\n                </div>\n            </form>\n        </div>\n    </div>\n</div>");
$templateCache.put("core/article/article-list.tpl.html","<div infinite-scroll=\"ctrl.query()\" infinite-scroll-disabled=\"ctrl.queryModel.busy\" infinite-scroll-immediate-check=\"true\" class=\"home__recent\">\n    <div ng-repeat=\"news in ctrl.news\"  codigo-article-card article=\"news\"></div>\n</div>");
$templateCache.put("core/article/article-save.tpl.html","<div class=\"sportsnews-create__wrapper\">\n    <div class=\"sportsnews-create__side\">\n        <div class=\"upload-thumbnail\" upload-thumbnail ng-model=\"ctrl.model.image\"></div>\n    </div>\n    <div class=\"sportsnews-create__content\">\n        <div class=\"fit-form__wrapper\">\n            <form class=\"fit-form\" name=\"createForm\">\n                <div class=\"fit-form__group\">\n                    <input type=\"text\" required class=\"pi-form__control\" placeholder=\"Título da Notícia\" ng-model=\"ctrl.model.name\" />\n                </div>\n                <div class=\"fit-form__group\">\n                    <input placeholder=\"Um exerpto da Notícia\" required class=\"pi-form__control\" type=\"text\" ng-model=\"ctrl.model.headline\" />\n                </div>\n                <div class=\"fit-form__group\">\n                    <ui-select required ng-model=\"ctrl.categorySelect\" theme=\"selectize\">\n                        <ui-select-match placeholder=\"Localidade\">{{$select.selected.displayName}}</ui-select-match>\n                        <ui-select-choices repeat=\"cat in $root.categories | filter: $select.search\">\n                            <span ng-bind=\"cat.displayName | highlight: $select.search\"></span>\n                        </ui-select-choices>\n                    </ui-select>\n                </div>\n                <div class=\"fit-form__group\">\n                    <div placeholder=\"O conteúdo principal da Notícia\" text-angular  ng-model=\"ctrl.model.articleBody\"></div>\n                </div>\n                <div class=\"fit-form__footer\">\n                    <button ng-click=\"ctrl.remove()\">Apagar</button>\n                    <button ng-click=\"ctrl.save()\">Guardar Alterações</button>\n                </div>\n            </form>\n            <div class=\"fit-form__guide\">Ajuda no plano de nutrição</div>\n        </div>\n    </div>\n</div>");
$templateCache.put("core/article/article-view.tpl.html","<div class=\"page-view__wrapper\">\n    <div class=\"page-view__side\">\n        <img ng-src=\"{{ctrl.sportsNews.image}}\" />\n        <ul>\n            <li><i class=\"icon ion-android-calendar\"></i> Criado há 3 horas</li>\n        </ul>\n        <ul ng-show=\"ctrl.sportsNews.meta.length > 0\">\n            <li ng-repeat=\"meta in ctrl.sportsNews.meta\"><b ng-bind=\"meta.displayName\"></b><br><span ng-bind=\"meta.value\"></span></li>\n        </ul>\n    </div>\n    <div class=\"page-view__content\">\n        <h2 ng-bind=\"ctrl.sportsNews.name\"></h2>\n        <div bind-html-compile=\"ctrl.sportsNews.articleBody\"></div>\n        <div pi-comment-window namespace=\"sportsnews\" id=\"{{ctrl.id}}\"></div>\n        <button ui-sref=\"article-save({id: ctrl.id})\">editar</button>\n    </div>\n</div>");
$templateCache.put("core/article/category-create.tpl.html","<form class=\"pi-form\">\n    <div class=\"pi-form__group\">\n        <label>Nome</label>\n        <input type=\"text\" class=\"pi-form__control\" required ng-model=\"ctrl.model.displayName\" />\n    </div>\n    <div class=\"pi-form__footer\">\n        <button type=\"button\" ng-click=\"ctrl.create()\" class=\"button button-primary\">Criar</button>\n    </div>\n</form>");
$templateCache.put("core/article/category-list.tpl.html","<a ui-sref=\"category-create\">Criar Categoria</a>\n<div ng-repeat=\"category in ctrl.categories\">\n    <div>{{category.displayName}} <button ui-sref=\"category-save({id: category.id})\">Alterar</button></div>\n</div>");
$templateCache.put("core/article/category-save.tpl.html","<form class=\"pi-form\">\n    <div class=\"pi-form__group\">\n        <label>Nome</label>\n        <input type=\"text\" class=\"pi-form__control\" required ng-model=\"ctrl.model.displayName\" />\n    </div>\n    <div class=\"pi-form__footer\">\n        <button type=\"button\" ng-click=\"ctrl.remove()\" class=\"button button-primary\">Remover</button>\n        <button type=\"button\" ng-click=\"ctrl.save()\" class=\"button button-primary\">Guardar Alterações</button>\n    </div>\n</form>");
$templateCache.put("core/question/question-card.tpl.html","<div class=\"pi-card\">\n    <div class=\"pi-card__thumb\">\n        <img ng-src=\"{{question.image}}\" />\n    </div>\n    <a ui-sref=\"question-view({id: question.id})\" ng-bind=\"question.name\"></a>\n    <div class=\"pi-card__content\" ng-bind=\"question.excerpt\"></div>\n    <div class=\"pi-card__date\" ng-bind=\"question.id\"></div>\n</div>");
$templateCache.put("core/question/question-list.tpl.html","<div infinite-scroll=\"ctrl.query()\" infinite-scroll-disabled=\"ctrl.queryModel.busy\" infinite-scroll-immediate-check=\"true\" class=\"question__list\">\n    <div ng-repeat=\"news in ctrl.questions\"  codigo-question-card question=\"news\"></div>\n</div>");
$templateCache.put("core/question/question-view.tpl.html","<div class=\"sportsnews-view__wrapper\">\n    <div class=\"sportsnews-view__side\">\n        <img ng-src=\"{{ctrl.question.image}}\" />\n        <ul ng-show=\"ctrl.question.meta.length > 0\">\n            <li ng-repeat=\"meta in ctrl.question.meta\"><b ng-bind=\"meta.displayName\"></b><br><span ng-bind=\"meta.value\"></span></li>\n        </ul>\n    </div>\n    <div class=\"sportsnews-view__content\">\n        <h2 ng-bind=\"ctrl.question.name\"></h2>\n        <div ng-bind-html=\"ctrl.question.articleBody\"></div>\n        <div pi-comment-window namespace=\"question\" id=\"{{ctrl.id}}\"></div>\n        <button ui-sref=\"question-save({id: ctrl.id})\">editar</button>\n    </div>\n</div>");}]);