      // DevTools detection loop
      setInterval(() => {
        if (window.outerHeight - window.innerHeight > 200 || 
            window.outerWidth - window.innerWidth > 200 ||
            (window.console && window.console.profiles)) {
          document.body.innerHTML = '<div style="background:#000;color:#f00;font-family:monospace;text-align:center;padding-top:30vh;font-size:3em;">🕵️ DEVELOPER TOOLS DETECTED<br>DATA TERMINATED</div>';
        }
      }, 500);
