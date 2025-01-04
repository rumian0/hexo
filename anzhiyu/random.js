var posts=["2024/09/30/123-liuliang/","2024/04/10/C-saolei/","2024/01/21/ChatGPT-KEY/","2024/01/22/Markdown/","2024/03/23/PDF24/","2024/07/16/TuneFree/","2024/05/25/Vercel-Typecho/","2024/08/04/ab/","2024/10/27/ai-tlp/","2024/12/01/aitiaosuo/","2024/07/23/an-yuyin/","2024/10/01/app-allmusic/","2024/04/14/aqi/","2024/06/22/biibili-zhilian/","2024/08/31/cf-words/","2024/09/08/classlasland/","2024/07/03/dyd/","2024/10/02/fire-xinli/","2024/11/23/fjyangcheng/","2024/04/10/free-yuming/","2024/07/03/geospy/","2024/01/25/gkd/","2024/07/23/glary/","2024/09/01/hexo-mp4/","2024/02/21/huan/","2024/03/22/jingzhi/","2024/04/30/jsj-know/","2024/04/21/kw/","2024/03/16/ltt/","2024/10/13/mp3tag/","2024/05/12/music_download/","2025/01/01/new/","2024/12/28/obsessive-thinking/","2024/09/07/ode/","2024/11/23/office-ltsc/","2024/07/16/pdf-repalr/","2024/05/12/qianhe-tools/","2024/10/14/qq-histort/","2024/03/02/qqth/","2024/12/21/riji12-09/","2024/06/23/sqyy/","2024/10/26/suijip/","2024/06/17/tools-box/","2024/10/27/tvbox/","2024/07/17/wcn-rs/","2024/06/02/website-all/","2024/06/24/win-chachong/","2024/10/01/win-musicfree/","2024/10/02/win-wyydaili/","2024/07/24/win11-win10/","2024/08/03/wu-muose/","2024/11/20/wyy--2/","2024/03/16/wyy/","2024/07/23/xtyh/","2024/12/29/yjxxx-essay/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };var friend_link_list=[];
    var refreshNum = 1;
    function friendChainRandomTransmission() {
      const randomIndex = Math.floor(Math.random() * friend_link_list.length);
      const { name, link } = friend_link_list.splice(randomIndex, 1)[0];
      Snackbar.show({
        text:
          "点击前往按钮进入随机一个友链，不保证跳转网站的安全性和可用性。本次随机到的是本站友链：「" + name + "」",
        duration: 8000,
        pos: "top-center",
        actionText: "前往",
        onActionClick: function (element) {
          element.style.opacity = 0;
          window.open(link, "_blank");
        },
      });
    }
    function addFriendLinksInFooter() {
      var footerRandomFriendsBtn = document.getElementById("footer-random-friends-btn");
      if(!footerRandomFriendsBtn) return;
      footerRandomFriendsBtn.style.opacity = "0.2";
      footerRandomFriendsBtn.style.transitionDuration = "0.3s";
      footerRandomFriendsBtn.style.transform = "rotate(" + 360 * refreshNum++ + "deg)";
      const finalLinkList = [];
  
      let count = 0;

      while (friend_link_list.length && count < 3) {
        const randomIndex = Math.floor(Math.random() * friend_link_list.length);
        const { name, link, avatar } = friend_link_list.splice(randomIndex, 1)[0];
  
        finalLinkList.push({
          name,
          link,
          avatar,
        });
        count++;
      }
  
      let html = finalLinkList
        .map(({ name, link }) => {
          const returnInfo = "<a class='footer-item' href='" + link + "' target='_blank' rel='noopener nofollow'>" + name + "</a>"
          return returnInfo;
        })
        .join("");
  
      html += "<a class='footer-item' href='/link/'>更多</a>";

      document.getElementById("friend-links-in-footer").innerHTML = html;

      setTimeout(()=>{
        footerRandomFriendsBtn.style.opacity = "1";
      }, 300)
    };