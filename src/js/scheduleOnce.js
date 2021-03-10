/* eslint-disable */
(function() {
  var StaticURL = 'https://cdn.oncehub.com';
  var bookingCtrls = document.querySelectorAll('[data-so-page]');
  var afterPageLoad = false;
  for (var i = 0; i < bookingCtrls.length; i++) {
    if (bookingCtrls[i].getAttribute('data-delay')) {
      afterPageLoad = true;
      break;
    }
  }
  initLoading(afterPageLoad);
  function initLoading(isDelayed) {
    if (document.readyState === 'complete' || !isDelayed) {
      loadSOMBD();
    } else {
      if (window.attachEvent) {
        window.attachEvent('onload', loadSOMBD);
      } else {
        if (window.onload) {
          var curronload = window.onload;
          var newonload = function(evt) {
            curronload(evt);
            loadSOMBD(evt);
          };
          window.onload = newonload;
        } else {
          window.onload = loadSOMBD;
        }
      }
    }
  }
  function loadSOMBD() {
    var script = document.createElement('script');
    script.src = StaticURL + '/mergedjs/ScheduleOnceEmbed.js';
    script.onload = initBookingControls;
    document.getElementsByTagName('head')[0].appendChild(script);
  }
  function initBookingControls() {
    var bookingCtrls = document.querySelectorAll('[data-so-page]');
    if (bookingCtrls) {
      for (var i = 0; i < bookingCtrls.length; i++) {
        var bctrl = bookingCtrls[i];
        if (bctrl.getAttribute('data-so-done') != 'true') {
          var qprm = bctrl.getAttribute('data-so-qry-prm');
          qprm = qprm ? (qprm[0] === '&' ? qprm : '&' + qprm) : '';
          function getPrm(b) {
            var p = soe.getAttr(bctrl, 'data-psz');
            if (
              !p ||
              p.length != 2 ||
              ['00', '01', '11', '10'].indexOf(p) == -1
            )
              p = '00';
            return [(p[0] == '1').toString(), (p[1] == '1').toString()];
          }
          function getHght(h, d) {
            if (h) h = h.trim();
            return !h || (h.indexOf('px') == -1 && isNaN(h))
              ? [d, 0]
              : [h.replace('px', ''), 1];
          }
          //Embed control
          if (bctrl.id.toUpperCase().indexOf('SOIDIV_') != -1) {
            var page = soe.getAttr(bctrl, 'data-so-page');
            var brdrWdth = '1px',
              brdrClr = '#d8d8d8';
            var brdr = soe
              .getAttrPrms(
                bctrl,
                'data-style',
                'border',
                brdrWdth + ' solid ' + brdrClr
              )
              .split(' solid #');
            try {
              brdrWdth = brdr[0];
              brdrClr = brdr[1].trim();
            } catch (e) {
              brdrWdth = '1px';
              brdrClr = '#d8d8d8';
            }
            var hght = getHght(soe.getAttr(bctrl, 'data-height'), '550');
            var param = getPrm(bctrl);
            var isPrmUrl = param[0];
            var isSoSkp = param[1];
            var minW = soe.getAttrPrms(
              bctrl,
              'data-style',
              'min-width',
              '290px'
            );
            var maxW = soe.getAttrPrms(
              bctrl,
              'data-style',
              'max-width',
              '900px'
            );
            soe.setAttrPrms(bctrl, 'data-style', {
              'min-width': minW,
              'max-width': maxW
            });
            soe.AddEventListners(
              soe.CfURL +
                '/' +
                page +
                '?brdr=' +
                brdrWdth +
                brdrClr +
                '&dt=&em=1' +
                qprm,
              page,
              hght[0] + 'px',
              '100% !important',
              isPrmUrl,
              isSoSkp,
              !!hght[1]
            );
          } else if (bctrl.id.toUpperCase().indexOf('SOIBTN_') != -1) {
            //Button control
            var page = soe.getAttr(bctrl, 'data-so-page');
            var txt = soe.getAttr(bctrl, 'value', 'Schedule an Appointment');
            var bg = soe.getStyl(bctrl, 'background', '#006ADF');
            var clr = soe.getStyl(bctrl, 'color', '#ffffff');
            var param = getPrm(bctrl);
            var isPrmUrl = param[0];
            var isSoSkp = param[1];
            var hght = getHght(soe.getAttr(bctrl, 'data-height'), '580');
            soe.InitButton(
              soe.CfURL + '/' + page,
              page,
              txt,
              bg,
              clr,
              isPrmUrl,
              !!hght[1],
              hght[0] + 'px',
              qprm
            );
            soe.AddEventListners('', '', '', '', isPrmUrl, isSoSkp, !!hght[1]);
            bctrl.setAttribute(
              'onclick',
              'return soe.toggleLightBox("' + page + '")'
            );
          } else if (bctrl.id.toUpperCase().indexOf('SOIWGT_') != -1) {
            //Widget control
            var page = soe.getAttr(bctrl, 'data-so-page');
            var wstl = 'data-wgt-style';
            var wttl = soe.getAttrPrms(
              bctrl,
              wstl,
              'ttl',
              'Free 1-on-1 Consultation'
            );
            var wbg = soe.getAttrPrms(bctrl, wstl, 'bg', '333333');
            var algn = soe.getAttrPrms(bctrl, wstl, 'align', 'right');
            var wclr = soe.getAttrPrms(bctrl, wstl, 'clr', 'ffffff');
            var hght = getHght(soe.getAttr(bctrl, 'data-height'), '580');
            var targetUrl = soe.getAttr(bctrl, 'data-target');
            var tmp = soe.getAttr(bctrl, 'data-tmp', '177.178').split('.');
            var ctid = tmp[0];
            var utid = tmp.length > 1 ? tmp[1] : '178';
            var pos = soe.getAttr(bctrl, 'data-pos', '132');
            var invldpos = false;
            if (pos.length != 3) invldpos = true;
            else {
              for (var x = 0; x < pos.length; x++)
                if (['0', '1', '2', '3'].indexOf(pos[x]) == -1) invldpos = true;
              if (
                (pos[0] != '0' && (pos[0] == pos[1] || pos[0] == pos[2])) ||
                (pos[1] != '0' && pos[1] == pos[2])
              )
                invldpos = true;
            }
            if (invldpos) pos = '132';
            var bstl = 'data-btn-style';
            var bttl = soe.getAttrPrms(bctrl, bstl, 'ttl', 'Schedule Online');
            var btxt = soe.getAttrPrms(
              bctrl,
              bstl,
              'txt',
              'Free 1-on-1 Consultation'
            );
            var bbg = soe.getAttrPrms(bctrl, bstl, 'bg', '006DAF');
            var bclr = soe.getAttrPrms(bctrl, bstl, 'clr', 'ffffff');
            var pstl = 'data-phn-style';
            var pttl = soe.getAttrPrms(bctrl, pstl, 'ttl', 'Call Us');
            var ptxt1 = soe.getAttrPrms(bctrl, pstl, 'phn1');
            var ptxt2 = soe.getAttrPrms(bctrl, pstl, 'phn2', '');
            var estl = 'data-eml-style';
            var ettl = soe.getAttrPrms(bctrl, estl, 'ttl', 'Email Us');
            var etxt = soe.getAttrPrms(bctrl, estl, 'txt', 'Send');
            var ebg = soe.getAttrPrms(bctrl, estl, 'bg', '006DAF');
            var eclr = soe.getAttrPrms(bctrl, estl, 'clr', 'ffffff');
            var soeml = soe.getAttr(bctrl, 'data-email');
            var eto = soeml
              ? soeml.substring(soeml.indexOf('(') + 1, soeml.indexOf(')'))
              : '';
            var elbl = soeml ? soeml.substr(0, soeml.indexOf(' (')) : '';
            var emsg = soe.getAttr(bctrl, 'data-message');
            soe.InitWidget(
              soe.CfURL + '/' + page,
              page,
              btxt,
              bbg,
              bclr,
              pos[0] + ',' + pos[1] + ',' + pos[2],
              pttl,
              ptxt1 + '_so_phone_sep_' + ptxt2,
              ettl,
              etxt,
              eclr,
              ebg,
              eto,
              elbl,
              emsg,
              ctid,
              utid,
              bttl,
              wttl,
              wclr,
              wbg,
              algn,
              '',
              !!hght[1],
              hght[0],
              targetUrl,
              qprm
            );
            soe.AddEventListners();
          }
          bctrl.setAttribute('data-so-done', 'true');
        }
      }
    }
  }
})();
