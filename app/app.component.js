(function(app) {
  app.AppComponent =
    ng.core.Component({
      selector: 'my-app',
      template: `
      <nav class="navbar navbar-default navbar-static-top">
        <div class="container">
        <div class="col-sm-3" style="text-align: left">
        <img href= "https://twitter.com/WIT_Notts" class="wit-nav" src="/images/NavLogo.png" alt="WitLogo">        
        </div>
        <div class="col-sm-9" style="text-align: right">
            <a class="btn btn-social-icon btn-twitter social-btn-hm" onclick="_gaq.push(['_trackEvent', 'btn-social-icon', 'click', 'btn-twitter']);"><span class="fa fa-twitter"></span></a>
            <a class="btn btn-social-icon btn-facebook social-btn-hm" onclick="_gaq.push(['_trackEvent', 'btn-social-icon', 'click', 'btn-facebook']);"><span class="fa fa-facebook"></span></a>
            <a class="btn btn-social-icon btn-linkedin social-btn-hm" onclick="_gaq.push(['_trackEvent', 'btn-social-icon', 'click', 'btn-linkedin']);"><span class="fa fa-linkedin"></span></a>
            <a class="btn btn-social-icon btn-pinterest social-btn-hm" onclick="_gaq.push(['_trackEvent', 'btn-social-icon', 'click', 'btn-pinterest']);"><span class="fa fa-list-alt"></span></a>
        </div>
        </div>

      </nav>
      <section style="text-align:center">
        <div>
        <img href= "https://twitter.com/WIT_Notts" src="/images/logo.png" alt="WitLogo" class="wit-logo">
        </div>

        <div class="intro-message" ng-controller="subscribeCtrl">
             <h2>Subscribe to the newsletter</h2>
             <h3>
                <div id="thank-you" style="height: 55px;display:none;">
                                Thank you!
                </div>
                <div>
                    <input type="email" placeholder="Your email" id="email-field"
                          style="padding:10px;color: #333;text-align: center;width: 400px;" 
                    />
                  </div>
                  <div id="invalid-mail-container"style="margin-top:20px;display:none;">
                    <small id="invalid-mail" style="color:white;">
                                  That's not a valid mail!
                    </small>
                  </div>
              </h3>
              <ul class="list-inline intro-social-buttons">
                   <li style="display:block;">
                                <a id="subscribe" class="btn btn-default btn-lg">
                                  <span class="network-name">Subscribe me!</span>
                                </a>
                    </li>
                    <li id="space-below" style="height:45px;display:none;"></li>
               </ul>
          </div>
      </section>
       `
    })
    .Class({
      constructor: function() {}
    });
})(window.app || (window.app = {}));