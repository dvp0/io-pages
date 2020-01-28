
          function log(text) {
            let result;
            if (text instanceof Element) {
              result = text.tagName + ' .' + text.className;
              // console.log(text.tagName + ' .' + text.className)
            } else {
              result = text;
              // console.log(text);
            }
            console.log(result);

            var node = document.createTextNode(result);
            getEl("console").appendChild(document.createElement('br'));
            getEl("console").appendChild(node);
          }

          function logActive() {
            var el = document.activeElement;
            log('----- active = ' + el.tagName + ' .' + el.className);
          } 

          function logEventTargets(e) {
            log('----- currentTarget = ' + e.currentTarget.tagName + '.' + e.currentTarget.className);
            log('----- srcTarget = ' + e.srcElement.tagName + '.' + e.srcElement.className);
          }

          function onFocusIn (e) {
            log('- focusIN -');
            logActive();
            logEventTargets(e);
          }

          function onFocusOut (e) {
            log('- focusOUT -');
            logActive();
            logEventTargets(e);
          };

          function onBlur (e) {
            log('- blur -');
            logActive();
            logEventTargets(e);
          }

          function getEl (className) { 
            return document.getElementsByClassName(className)[0];
          }


          // Adding listners to parent and children elements using classes

          ["focuscontainer", "seekbar", "captions"].forEach(eachClass => {
            const $el = getEl(eachClass);
            $el.addEventListener('focusin', onFocusIn);
            $el.addEventListener('focusout', onFocusOut);
            $el.addEventListener('blur', onBlur);
          })

          const $focuscontainer = getEl("focuscontainer");
          const $seekbar = getEl("seekbar");
          const $captions = getEl("captions");

          // Focus on seekbar
          // Similar to : Initial player load
          setTimeout(() => {
            log("### Focus on seekbar");
            $seekbar.focus();
          },100);

          // Hiding the parent of focused element
          // Similar to : Player going to idle and overlay disappearing
          setTimeout(() => {
            log("### Hiding the parent of focused element");
            $focuscontainer.classList.add("hidden");
          }, 300);

          // Showing the hidden element again
          // Similar to : Player waking up
          setTimeout(() => {
            log("### Showing the hidden element again");
            $focuscontainer.classList.remove("hidden");
          }, 600);

          // Focusing on seekbar
          // Similar to : Player going to idle and overlay disappearing
          setTimeout(() => {
            log("### Focusing on seekbar");
            $seekbar.focus();
          }, 900);

          // Focusing on captions
          // Similar to : Switching focus to player captions
          setTimeout(() => {
            log("### Focusing on captions");
            $captions.focus();
          }, 1200);
          