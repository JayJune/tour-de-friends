(this["webpackJsonptour-de-friends"]=this["webpackJsonptour-de-friends"]||[]).push([[0],{54:function(e,t,a){e.exports=a.p+"static/media/tdfLogo.1d1d2346.jpg"},61:function(e,t,a){e.exports=a(93)},66:function(e,t,a){},68:function(e,t,a){},93:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(19),i=a.n(r),l=(a(66),a(14)),s=a.n(l),c=a(27),u=a(42),m=a(20),h=a(21),d=a(25),p=a(24),f=(a(68),a(41)),g=a(54),y=a.n(g),v=function(e){var t=e.article.urlToImage?e.article.urlToImage:y.a;return o.a.createElement("div",{className:"news-thumbnail-holder"},o.a.createElement("a",{href:e.article.url},o.a.createElement("img",{className:"news-thumbnail",src:t}),o.a.createElement("div",{className:"top-overlay"},o.a.createElement("div",{className:"article-source-text"},e.article.source.name),e.article.title)))};var E=function(e){var t=Object(n.useState)(null),a=Object(f.a)(t,2),r=a[0],i=a[1],l=Object(n.useState)(!1),s=Object(f.a)(l,2),c=s[0],u=s[1],m=Object(n.useState)([]),h=Object(f.a)(m,2),d=h[0],p=h[1];if(Object(n.useEffect)((function(){var e='https://newsapi.org/v2/everything?qInTitle="tour de france"&sources?language=en&sortBy=popularity&'+"apiKey=".concat("7fb80c689c9b4949961c138fc1be7c53");fetch(e).then((function(e){return e.json()})).then((function(e){u(!0),p(e.articles)}),(function(e){u(!0),i(e)}))}),[]),r)return o.a.createElement("div",null,"Error: ",r.message);if(c){console.log(d);var g=d.map((function(e,t){return o.a.createElement(v,{key:t,article:e})}));return o.a.createElement("div",{className:"article-holder container-lg"},o.a.createElement("div",{className:"page-content-holder"},o.a.createElement("h1",null,"Latest News"),g),o.a.createElement("div",null,"Powered by ",o.a.createElement("a",{href:"https://newsapi.org/"},"newsapi.org")))}return o.a.createElement("div",null,"Loading...")},b=function(e){return o.a.createElement("div",null,"some cool Social")},w=a(49),P=function(e){return o.a.createElement("div",{className:"video",style:{position:"relative",paddingBottom:"56.25%",paddingTop:25,height:0}},o.a.createElement("iframe",{style:{position:"absolute",top:0,left:0,width:"100%",height:"100%"},src:"https://www.youtube.com/embed/".concat(e.ID),frameBorder:"0"}))},Y=function(e){return o.a.createElement("div",{className:"youtube-thumbnail-holder"},e.selected?o.a.createElement(o.a.Fragment,null,o.a.createElement("img",{className:"youtube-thumbnail selected",src:"https://img.youtube.com/vi/".concat(e.ID,"/0.jpg"),alt:"youtube thumbnail",height:"auto",width:"100%"}),o.a.createElement("div",{className:"centered-overlay"},"Now Playing")):o.a.createElement("img",{className:"youtube-thumbnail",onClick:e.onClick,src:"https://img.youtube.com/vi/".concat(e.ID,"/0.jpg"),alt:"youtube thumbnail"}),o.a.createElement("div",{className:"bottom-center-overlay"},e.title))},k=a(55),S=a.n(k),I=(a(81),function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(e,n){var o;return Object(m.a)(this,a),(o=t.call(this,e,n)).state={error:null,isLoaded:!1,isMineLoaded:!1,videosItems:[],playlistPlayingIndex:0,videoPlayingIndex:0},o}return Object(h.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("https://www.googleapis.com/youtube/v3/search?key=".concat("AIzaSyCmdVYTVvew2hwqAx0hrlCIXA_aUBnpH3Y","&channelId=UCSpycUnuU0IVF7gGIhGojhg&type=video&part=snippet,id&order=date&maxResults=").concat(10)).then((function(e){return e.json()})).then((function(t){var a=Object(w.a)(e.state.videosItems);a[0]=t.items,e.setState({isLoaded:!0,videosItems:a})}),(function(t){e.setState({isLoaded:!0,error:t})})),fetch("https://www.googleapis.com/youtube/v3/search?key=".concat("AIzaSyCmdVYTVvew2hwqAx0hrlCIXA_aUBnpH3Y","&q=tour+de+france&type=video&part=snippet,id&maxResults=").concat(10)).then((function(e){return e.json()})).then((function(t){var a=Object(w.a)(e.state.videosItems);a[1]=t.items,e.setState({isMineLoaded:!0,videosItems:a})}),(function(t){e.setState({isMineLoaded:!0,error:t})}))}},{key:"changeNowPlaying",value:function(e,t){this.setState({playlistPlayingIndex:e,videoPlayingIndex:t})}},{key:"render",value:function(){var e=this,t={desktop:{breakpoint:{max:3e3,min:1024},items:5,slidesToSlide:4},tablet:{breakpoint:{max:1024,min:464},items:3,slidesToSlide:2},mobile:{breakpoint:{max:464,min:0},items:2,slidesToSlide:1}};if(this.state.isLoaded&&this.state.isMineLoaded){console.log(this.state.videosItems);var a=this.state.videosItems.map((function(t,a){return t.map((function(t,n){return e.state.playlistPlayingIndex===a&&e.state.videoPlayingIndex===n?o.a.createElement(Y,{key:t.id.videoId,ID:t.id.videoId,title:t.snippet.title,selected:!0}):o.a.createElement(Y,{key:t.id.videoId,ID:t.id.videoId,title:t.snippet.title,selected:!1,onClick:function(){return e.changeNowPlaying(a,n)}})}))})).map((function(e){return o.a.createElement(S.a,{additionalTransfrom:0,swipeable:!0,draggable:!1,showDots:!1,responsive:t,ssr:!1,infinite:!0,autoPlay:!1,keyBoardControl:!0,containerClass:"carousel-container",itemClass:"carousel-item-padding-40-px"},e)}));return o.a.createElement("div",{className:"page-content-holder container-xl"},o.a.createElement("h2",{className:"stream-headings"},"Playing now"),o.a.createElement(P,{ID:this.state.videosItems[this.state.playlistPlayingIndex][this.state.videoPlayingIndex].id.videoId}),o.a.createElement("h2",{className:"stream-headings"},"New videos"),a[0],o.a.createElement("h2",{className:"stream-headings"},"For You"),a[1],o.a.createElement("h2",{className:"stream-headings"},"What Other People Are Watching"))}return o.a.createElement("div",{className:"page-content-holder"}," loading...")}}]),a}(n.Component)),C=function(e){return o.a.createElement("div",{className:"container-md",style:{textAlign:"left",paddingTop:"40px"}},o.a.createElement("h1",null,"About"),o.a.createElement("p",null,"Tour de Friends is a demo project for the 2020 NTT TDF hackathon. This website was created by team tour de memes who are ",o.a.createElement("a",{href:"https://github.com/edbertc"},"edbertc"),", ",o.a.createElement("a",{href:"https://github.com/Pruneyy"},"Pruneyy"),", ",o.a.createElement("a",{href:"https://github.com/vampirate"},"vampirate"),", ",o.a.createElement("a",{href:"https://github.com/JayJune"},"JayJune"),", and yunyeet. You can find the code repository for this project ",o.a.createElement("a",{href:"https://github.com/JayJune/tour-de-friends"},"here.")," "),o.a.createElement("h1",null,"Privacy Policy"),o.a.createElement("p",null,"Last updated: April 23, 2020"),o.a.createElement("p",null,"This Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your information when You use the Service and tells You about Your privacy rights and how the law protects You."),o.a.createElement("p",null,"We use Your Personal data to provide and improve the Service. By using the Service, You agree to the collection and use of information in accordance with this Privacy Policy. This Privacy Policy is maintained by the ",o.a.createElement("a",{href:"https://www.freeprivacypolicy.com/free-privacy-policy-generator/"},"Free Privacy Policy Generator"),"."),o.a.createElement("h1",null,"Interpretation and Definitions"),o.a.createElement("h2",null,"Interpretation"),o.a.createElement("p",null,"The words of which the initial letter is capitalized have meanings defined under the following conditions."),o.a.createElement("p",null,"The following definitions shall have the same meaning regardless of whether they appear in singular or in plural."),o.a.createElement("h2",null,"Definitions"),o.a.createElement("p",null,"For the purposes of this Privacy Policy:"),o.a.createElement("ul",null,o.a.createElement("li",null,o.a.createElement("p",null,o.a.createElement("strong",null,"You")," means the individual accessing or using the Service, or the company, or other legal entity on behalf of which such individual is accessing or using the Service, as applicable.")),o.a.createElement("li",null,o.a.createElement("p",null,o.a.createElement("strong",null,"Company"),' (referred to as either "the Company", "We", "Us" or "Our" in this Agreement) refers to Tour de friends.')),o.a.createElement("li",null,o.a.createElement("strong",null,"Affiliate"),' means an entity that controls, is controlled by or is under common control with a party, where "control" means ownership of 50% or more of the shares, equity interest or other securities entitled to vote for election of directors or other managing authority.'),o.a.createElement("li",null,o.a.createElement("strong",null,"Account")," means a unique account created for You to access our Service or parts of our Service."),o.a.createElement("li",null,o.a.createElement("strong",null,"Website")," refers to Tour de friends, accessible from https://jayjune.github.io/tour-de-friends/"),"        ",o.a.createElement("li",null,o.a.createElement("strong",null,"Service")," refers to the Website."),o.a.createElement("li",null,o.a.createElement("strong",null,"Country")," refers to: New South Wales, Australia"),o.a.createElement("li",null,o.a.createElement("p",null,o.a.createElement("strong",null,"Service Provider")," means any natural or legal person who processes the data on behalf of the Company. It refers to third-party companies or individuals employed by the Company to facilitate the Service, to provide the Service on behalf of the Company, to perform services related to the Service or to assist the Company in analyzing how the Service is used.")),o.a.createElement("li",null,o.a.createElement("strong",null,"Third-party Social Media Service")," refers to any website or any social network website through which a User can log in or create an account to use the Service."),o.a.createElement("li",null,o.a.createElement("p",null,o.a.createElement("strong",null,"Personal Data")," is any information that relates to an identified or identifiable individual.")),o.a.createElement("li",null,o.a.createElement("strong",null,"Cookies")," are small files that are placed on Your computer, mobile device or any other device by a website, containing the details of Your browsing history on that website among its many uses."),"  ",o.a.createElement("li",null,o.a.createElement("strong",null,"Device")," means any device that can access the Service such as a computer, a cellphone or a digital tablet."),o.a.createElement("li",null,o.a.createElement("strong",null,"Usage Data")," refers to data collected automatically, either generated by the use of the Service or from the Service infrastructure itself (for example, the duration of a page visit).")),o.a.createElement("h1",null,"Collecting and Using Your Personal Data"),o.a.createElement("h2",null,"Types of Data Collected"),o.a.createElement("h3",null,"Personal Data"),o.a.createElement("p",null,"While using Our Service, We may ask You to provide Us with certain personally identifiable information that can be used to contact or identify You. Personally identifiable information may include, but is not limited to:"),o.a.createElement("ul",null,o.a.createElement("li",null,"Email address"),"  ",o.a.createElement("li",null,"First name and last name"),"          ",o.a.createElement("li",null,"Usage Data")),o.a.createElement("h3",null,"Usage Data"),o.a.createElement("p",null,"Usage Data is collected automatically when using the Service."),o.a.createElement("p",null,"Usage Data may include information such as Your Device's Internet Protocol address (e.g. IP address), browser type, browser version, the pages of our Service that You visit, the time and date of Your visit, the time spent on those pages, unique device identifiers and other diagnostic data."),o.a.createElement("p",null,"When You access the Service by or through a mobile device, We may collect certain information automatically, including, but not limited to, the type of mobile device You use, Your mobile device unique ID, the IP address of Your mobile device, Your mobile operating system, the type of mobile Internet browser You use, unique device identifiers and other diagnostic data."),o.a.createElement("p",null,"We may also collect information that Your browser sends whenever You visit our Service or when You access the Service by or through a mobile device."),o.a.createElement("h3",null,"Tracking Technologies and Cookies"),o.a.createElement("p",null,"We use Cookies and similar tracking technologies to track the activity on Our Service and store certain information. Tracking technologies used are beacons, tags, and scripts to collect and track information and to improve and analyze Our Service."),o.a.createElement("p",null,"You can instruct Your browser to refuse all Cookies or to indicate when a Cookie is being sent. However, if You do not accept Cookies, You may not be able to use some parts of our Service."),o.a.createElement("p",null,'Cookies can be "Persistent" or "Session" Cookies. Persistent Cookies remain on your personal computer or mobile device when You go offline, while Session Cookies are deleted as soon as You close your web browser. Learn more about cookies here: ',o.a.createElement("a",{href:"https://www.freeprivacypolicy.com/blog/cookies/"},"Cookies: What Do They Do?")),o.a.createElement("p",null,"We use both session and persistent Cookies for the purposes set out below:"),o.a.createElement("ul",null,o.a.createElement("li",null,o.a.createElement("p",null,o.a.createElement("strong",null,"Necessary / Essential Cookies")),o.a.createElement("p",null,"Type: Session Cookies"),o.a.createElement("p",null,"Administered by: Us"),o.a.createElement("p",null,"Purpose: These Cookies are essential to provide You with services available through the Website and to enable You to use some of its features. They help to authenticate users and prevent fraudulent use of user accounts. Without these Cookies, the services that You have asked for cannot be provided, and We only use these Cookies to provide You with those services.")),o.a.createElement("li",null,o.a.createElement("p",null,o.a.createElement("strong",null,"Cookies Policy / Notice Acceptance Cookies")),o.a.createElement("p",null,"Type: Persistent Cookies"),o.a.createElement("p",null,"Administered by: Us"),o.a.createElement("p",null,"Purpose: These Cookies identify if users have accepted the use of cookies on the Website.")),o.a.createElement("li",null,o.a.createElement("p",null,o.a.createElement("strong",null,"Functionality Cookies")),o.a.createElement("p",null,"Type: Persistent Cookies"),o.a.createElement("p",null,"Administered by: Us"),o.a.createElement("p",null,"Purpose: These Cookies allow us to remember choices You make when You use the Website, such as remembering your login details or language preference. The purpose of these Cookies is to provide You with a more personal experience and to avoid You having to re-enter your preferences every time You use the Website."))),o.a.createElement("p",null,"For more information about the cookies we use and your choices regarding cookies, please visit our Cookies Policy."),o.a.createElement("h2",null,"Use of Your Personal Data"),o.a.createElement("p",null,"The Company may use Personal Data for the following purposes:"),o.a.createElement("ul",null,o.a.createElement("li",null,o.a.createElement("strong",null,"To provide and maintain our Service"),", including to monitor the usage of our Service."),o.a.createElement("li",null,o.a.createElement("strong",null,"To manage Your Account:")," to manage Your registration as a user of the Service. The Personal Data You provide can give You access to different functionalities of the Service that are available to You as a registered user."),o.a.createElement("li",null,o.a.createElement("strong",null,"For the performance of a contract:")," the development, compliance and undertaking of the purchase contract for the products, items or services You have purchased or of any other contract with Us through the Service."),o.a.createElement("li",null,o.a.createElement("strong",null,"To contact You:")," To contact You by email, telephone calls, SMS, or other equivalent forms of electronic communication, such as a mobile application's push notifications regarding updates or informative communications related to the functionalities, products or contracted services, including the security updates, when necessary or reasonable for their implementation."),o.a.createElement("li",null,o.a.createElement("strong",null,"To provide You")," with news, special offers and general information about other goods, services and events which we offer that are similar to those that you have already purchased or enquired about unless You have opted not to receive such information."),o.a.createElement("li",null,o.a.createElement("strong",null,"To manage Your requests:")," To attend and manage Your requests to Us.")),o.a.createElement("p",null,"We may share your personal information in the following situations:"),o.a.createElement("ul",null,o.a.createElement("li",null,o.a.createElement("strong",null,"With Service Providers:")," We may share Your personal information with Service Providers to monitor and analyze the use of our Service,  to contact You."),o.a.createElement("li",null,o.a.createElement("strong",null,"For Business transfers:")," We may share or transfer Your personal information in connection with, or during negotiations of, any merger, sale of Company assets, financing, or acquisition of all or a portion of our business to another company."),o.a.createElement("li",null,o.a.createElement("strong",null,"With Affiliates:")," We may share Your information with Our affiliates, in which case we will require those affiliates to honor this Privacy Policy. Affiliates include Our parent company and any other subsidiaries, joint venture partners or other companies that We control or that are under common control with Us."),o.a.createElement("li",null,o.a.createElement("strong",null,"With Business partners:")," We may share Your information with Our business partners to offer You certain products, services or promotions."),o.a.createElement("li",null,o.a.createElement("strong",null,"With other users:")," when You share personal information or otherwise interact in the public areas with other users, such information may be viewed by all users and may be publicly distributed outside. If You interact with other users or register through a Third-Party Social Media Service, Your contacts on the Third-Party Social Media Service may see You name, profile, pictures and description of Your activity. Similarly, other users will be able to view descriptions of Your activity, communicate with You and view Your profile.")),o.a.createElement("h2",null,"Retention of Your Personal Data"),o.a.createElement("p",null,"The Company will retain Your Personal Data only for as long as is necessary for the purposes set out in this Privacy Policy. We will retain and use Your Personal Data to the extent necessary to comply with our legal obligations (for example, if we are required to retain your data to comply with applicable laws), resolve disputes, and enforce our legal agreements and policies."),o.a.createElement("p",null,"The Company will also retain Usage Data for internal analysis purposes. Usage Data is generally retained for a shorter period of time, except when this data is used to strengthen the security or to improve the functionality of Our Service, or We are legally obligated to retain this data for longer time periods."),o.a.createElement("h2",null,"Transfer of Your Personal Data"),o.a.createElement("p",null,"Your information, including Personal Data, is processed at the Company's operating offices and in any other places where the parties involved in the processing are located. It means that this information may be transferred to \u2014 and maintained on \u2014 computers located outside of Your state, province, country or other governmental jurisdiction where the data protection laws may differ than those from Your jurisdiction."),o.a.createElement("p",null,"Your consent to this Privacy Policy followed by Your submission of such information represents Your agreement to that transfer."),o.a.createElement("p",null,"The Company will take all steps reasonably necessary to ensure that Your data is treated securely and in accordance with this Privacy Policy and no transfer of Your Personal Data will take place to an organization or a country unless there are adequate controls in place including the security of Your data and other personal information."),o.a.createElement("h2",null,"Disclosure of Your Personal Data"),o.a.createElement("h3",null,"Business Transactions"),o.a.createElement("p",null,"If the Company is involved in a merger, acquisition or asset sale, Your Personal Data may be transferred. We will provide notice before Your Personal Data is transferred and becomes subject to a different Privacy Policy."),o.a.createElement("h3",null,"Law enforcement"),o.a.createElement("p",null,"Under certain circumstances, the Company may be required to disclose Your Personal Data if required to do so by law or in response to valid requests by public authorities (e.g. a court or a government agency)."),o.a.createElement("h3",null,"Other legal requirements"),o.a.createElement("p",null,"The Company may disclose Your Personal Data in the good faith belief that such action is necessary to:"),o.a.createElement("ul",null,o.a.createElement("li",null,"Comply with a legal obligation"),o.a.createElement("li",null,"Protect and defend the rights or property of the Company"),o.a.createElement("li",null,"Prevent or investigate possible wrongdoing in connection with the Service"),o.a.createElement("li",null,"Protect the personal safety of Users of the Service or the public"),o.a.createElement("li",null,"Protect against legal liability")),o.a.createElement("h2",null,"Security of Your Personal Data"),o.a.createElement("p",null,"The security of Your Personal Data is important to Us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While We strive to use commercially acceptable means to protect Your Personal Data, We cannot guarantee its absolute security."),o.a.createElement("h1",null,"Children's Privacy"),o.a.createElement("p",null,"Our Service does not address anyone under the age of 13. We do not knowingly collect personally identifiable information from anyone under the age of 13. If You are a parent or guardian and You are aware that Your child has provided Us with Personal Data, please contact Us. If We become aware that We have collected Personal Data from anyone under the age of 13 without verification of parental consent, We take steps to remove that information from Our servers."),o.a.createElement("p",null,"If We need to rely on consent as a legal basis for processing Your information and Your country requires consent from a parent, We may require Your parent's consent before We collect and use that information."),o.a.createElement("h1",null,"Links to Other Websites"),o.a.createElement("p",null,"Our Service may contain links to other websites that are not operated by Us. If You click on a third party link, You will be directed to that third party's site. We strongly advise You to review the Privacy Policy of every site You visit."),o.a.createElement("p",null,"We have no control over and assume no responsibility for the content, privacy policies or practices of any third party sites or services."),o.a.createElement("h1",null,"Changes to this Privacy Policy"),o.a.createElement("p",null,"We may update our Privacy Policy from time to time. We will notify You of any changes by posting the new Privacy Policy on this page."),o.a.createElement("p",null,'We will let You know via email and/or a prominent notice on Our Service, prior to the change becoming effective and update the "Last updated" date at the top of this Privacy Policy.'),o.a.createElement("p",null,"You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page."),o.a.createElement("h1",null,"Contact Us"),o.a.createElement("p",null,"If you have any questions about this Privacy Policy, You can contact us:"),o.a.createElement("ul",null,o.a.createElement("li",null,"By email: jijun.xiong@gmail.com")))},T=function(e){return o.a.createElement("div",null,"some cool Profile")},W=a(12),D=a(31),j=a(40),O=a(34),N=a.n(O),x=function(e){return o.a.createElement(D.a,{collapseOnSelect:!0,expand:"md",bg:"warning",variant:"light"},o.a.createElement(D.a.Brand,null,"Tour de Friends"),o.a.createElement(D.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),o.a.createElement(D.a.Collapse,{id:"responsive-navbar-nav"},o.a.createElement(W.a,{className:"mr-auto"},o.a.createElement(W.a.Link,{onClick:function(){return e.routeTo("/")}},"News"),o.a.createElement(W.a.Link,{onClick:function(){return e.routeTo("/social")}},"Social"),o.a.createElement(W.a.Link,{onClick:function(){return e.routeTo("/stream")}},"Stream"),o.a.createElement(W.a.Link,{onClick:function(){return e.routeTo("/about")}},"About")),e.loggedIn?o.a.createElement(W.a,null,o.a.createElement(j.a,{title:e.gName,id:"collasible-nav-dropdown"},o.a.createElement(j.a.Item,{onClick:function(){return e.routeTo("/myProfile")}},"My Profile"),o.a.createElement(O.GoogleLogout,{clientId:"160172302129-f6agjeg64is48fdtpl44694la81v1kgb.apps.googleusercontent.com",render:function(e){return o.a.createElement(j.a.Item,{onClick:e.onClick},"Log out")},onLogoutSuccess:e.toggleLoggedIn}))):o.a.createElement(W.a,null,o.a.createElement(W.a.Link,{onClick:function(){return e.routeTo("/login")}},"Login"))))},L=function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e)).responseGoogle=function(e){n.props.toggleLoggedIn(e.profileObj)},n.showError=function(){alert("Login failed.")},n}return Object(h.a)(a,[{key:"render",value:function(){return o.a.createElement("div",{style:{display:"flex"}},o.a.createElement("div",{className:"pad-center"}),o.a.createElement("div",{className:"vertical-center-flex"},o.a.createElement("div",{className:"center-with-padding"},o.a.createElement(N.a,{clientId:"160172302129-f6agjeg64is48fdtpl44694la81v1kgb.apps.googleusercontent.com",render:function(e){return o.a.createElement("button",{className:"loginBtn loginBtn--google",onClick:e.onClick,disabled:e.disabled},"Log in with Google")},onSuccess:this.responseGoogle,onFailure:this.showError,isSignedIn:!0}))),o.a.createElement("div",{className:"pad-center"}))}}]),a}(n.Component),U=a(57),q=a.n(U)()(),A=a(58),B=a(99),F=function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(e,n){var o;return Object(m.a)(this,a),(o=t.call(this,e,n)).changeHandler=function(e){var t=e.target.name,a=e.target.value,n=Object(u.a)({},o.state);n[t]=a,o.setState(Object(u.a)({},n))},o.routeTo=function(e){q.push("".concat("/tour-de-friends").concat(e))},o.toggleLoggedIn=function(e){o.state.loggedIn?(o.setState({gProfile:{},loggedIn:!1}),q.push("".concat("/tour-de-friends","/"))):(console.log(e),o.setState({gProfile:e,loggedIn:!0}),console.log(o.state),q.push("".concat("/tour-de-friends","/")))},o.state={gProfile:{},loggedIn:!1},o}return Object(h.a)(a,[{key:"componentDidMount",value:function(){var e=Object(c.a)(s.a.mark((function e(){var t,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(A.a)("160172302129-f6agjeg64is48fdtpl44694la81v1kgb.apps.googleusercontent.com","");case 2:(t=e.sent).isSignedIn.get()&&(console.log(t),a=this.usePersistedState("state",{gProfile:{},loggedIn:!1}),this.setState(Object(u.a)({},a)));case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"usePersistedState",value:function(e,t){if(t){var a=localStorage.getItem(e);return a?JSON.parse(a):t}window.localStorage.setItem(e,JSON.stringify(this.state))}},{key:"render",value:function(){var e="/tour-de-friends";return o.a.createElement("div",{className:"App"},o.a.createElement(B.b,{basename:"/tour-de-friends",history:q},o.a.createElement(x,{loggedIn:this.state.loggedIn,gName:this.state.gProfile.givenName,routeTo:this.routeTo,toggleLoggedIn:this.toggleLoggedIn}),o.a.createElement(B.c,null,o.a.createElement(B.a,{exact:!0,path:"".concat(e,"/")},o.a.createElement(E,null)),o.a.createElement(B.a,{path:"".concat(e,"/login")},o.a.createElement(L,{changeHandler:this.changeHandler,toggleLoggedIn:this.toggleLoggedIn,valid:this.state.valid})),o.a.createElement(B.a,{path:"".concat(e,"/social")},o.a.createElement(b,null)),o.a.createElement(B.a,{path:"".concat(e,"/stream")},o.a.createElement(I,null)),o.a.createElement(B.a,{path:"".concat(e,"/about")},o.a.createElement(C,null)),o.a.createElement(B.a,{path:"".concat(e,"/myProfile")},o.a.createElement(T,null)))))}}]),a}(o.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(F,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[61,1,2]]]);
//# sourceMappingURL=main.6f427013.chunk.js.map