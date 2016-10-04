(function(app) {
  app.AppComponent =
    ng.core.Component({
      selector: 'my-app',
      template: `
      <nav class="navbar navbar-default navbar-static-top">
        <div class="container">
        <div class="col-xs-2 col-sm-3" style="text-align: left">
        <img href= "https://twitter.com/WIT_Notts" class="wit-nav" src="/images/NavLogo.png" alt="WitLogo">        
        </div>
        <div class="col-xs-8 col-sm-9" style="text-align: right">
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
        <div class="intro-message subscribe-form" ng-controller="subscribeCtrl">
            <link href="//cdn-images.mailchimp.com/embedcode/horizontal-slim-10_7.css" rel="stylesheet" type="text/css">
            <style type="text/css">
              #mc_embed_signup{background:#fff; clear:left; font:14px Helvetica,Arial,sans-serif; width:100%;}
            </style>
            <div id="mc_embed_signup">
            <form action="//womenintechnotts.us14.list-manage.com/subscribe/post?u=fe917acbf27712a9c92604259&amp;id=e178f5169f" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
                <div id="mc_embed_signup_scroll">
              <label class="wit-text" for="mce-EMAIL">Subscribe to our mailing list</label>
              <input type="email" value="" name="EMAIL" class="email" id="mce-EMAIL" placeholder="email address" required>
                <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
                <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_fe917acbf27712a9c92604259_e178f5169f" tabindex="-1" value=""></div>
                <div class="clear"><input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" class="btn btn-wit"></div>
                </div>
            </form>
            </div>
        </div>
      </section>
       `
    })
    .Class({
      constructor: function() {}
    });
})(window.app || (window.app = {}));