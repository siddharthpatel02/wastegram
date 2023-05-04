;/*FB_PKG_DELIM*/

__d("PolarisMobilePostCaptionFragment.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"PolarisMobilePostCaptionFragment",selections:[{alias:null,args:null,concreteType:"XDTUserDict",kind:"LinkedField",name:"user",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"is_verified",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"username",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"pk",storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:"XDTCommentDict",kind:"LinkedField",name:"caption",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"text",storageKey:null}],storageKey:null}],type:"XDTMediaDict",abstractKey:null};e.exports=a}),null);
__d("PolarisMobilePostDetailsSectionFragment.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"PolarisMobilePostDetailsSectionFragment",selections:[{kind:"RequiredField",field:{alias:null,args:null,kind:"ScalarField",name:"code",storageKey:null},action:"THROW",path:"code"},{alias:null,args:null,kind:"ScalarField",name:"taken_at",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"comment_count",storageKey:null},{alias:null,args:null,concreteType:"XDTCommentDict",kind:"LinkedField",name:"comments",plural:!0,selections:[{alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null}],storageKey:null},{args:null,kind:"FragmentSpread",name:"PolarisPostUFI_media"},{args:null,kind:"FragmentSpread",name:"PolarisPostFastViewAllComments_media"},{args:null,kind:"FragmentSpread",name:"PolarisMobilePostCaptionFragment"},{args:null,kind:"FragmentSpread",name:"PolarisMobilePostPreviewCommentsFragment"},{args:null,kind:"FragmentSpread",name:"PolarisPostFooterFragment_media"}],type:"XDTMediaDict",abstractKey:null};e.exports=a}),null);
__d("PolarisMobilePostFragment.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"PolarisMobilePostFragment",selections:[{args:null,kind:"FragmentSpread",name:"PolarisPostHeader_media"},{args:null,kind:"FragmentSpread",name:"PolarisMedia_media"},{args:null,kind:"FragmentSpread",name:"PolarisPostFeedbackControls_media"},{args:null,kind:"FragmentSpread",name:"PolarisMobilePostDetailsSectionFragment"},{args:null,kind:"FragmentSpread",name:"PolarisMobilePostHeader"},{args:null,kind:"FragmentSpread",name:"usePolarisMediaInitialCarouselIndex"},{args:null,kind:"FragmentSpread",name:"usePolarisPostViewpointLogging"},{args:null,kind:"FragmentSpread",name:"PolarisPostContextFragment"}],type:"XDTMediaDict",abstractKey:null};e.exports=a}),null);
__d("PolarisMobilePostHeader.graphql",[],(function(a,b,c,d,e,f){"use strict";a=function(){var a={alias:null,args:null,kind:"ScalarField",name:"pk",storageKey:null};return{argumentDefinitions:[],kind:"Fragment",metadata:null,name:"PolarisMobilePostHeader",selections:[{kind:"RequiredField",field:a,action:"THROW",path:"pk"},{alias:null,args:null,kind:"ScalarField",name:"media_type",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"is_paid_partnership",storageKey:null},{alias:null,args:null,concreteType:"XDTAffiliateInfo",kind:"LinkedField",name:"affiliate_info",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"disclosure_tag",storageKey:null}],storageKey:null},{kind:"RequiredField",field:{alias:null,args:null,concreteType:"XDTUserDict",kind:"LinkedField",name:"user",plural:!1,selections:[{kind:"RequiredField",field:a,action:"THROW",path:"user.pk"}],storageKey:null},action:"THROW",path:"user"},{args:null,kind:"FragmentSpread",name:"PolarisPostHeaderFavoritedIconButton_items"},{args:null,kind:"FragmentSpread",name:"usePolarisMediaOwnerTypeFragment_media"}],type:"XDTMediaDict",abstractKey:null}}();e.exports=a}),null);
__d("PolarisMobilePostPreviewCommentsFragment.graphql",[],(function(a,b,c,d,e,f){"use strict";a=function(){var a={alias:null,args:null,kind:"ScalarField",name:"pk",storageKey:null};return{argumentDefinitions:[],kind:"Fragment",metadata:null,name:"PolarisMobilePostPreviewCommentsFragment",selections:[{kind:"RequiredField",field:a,action:"THROW",path:"pk"},{alias:null,args:null,concreteType:"XDTCommentDict",kind:"LinkedField",name:"comments",plural:!0,selections:[{kind:"RequiredField",field:a,action:"THROW",path:"comments.pk"},{alias:null,args:null,kind:"ScalarField",name:"text",storageKey:null},{alias:null,args:null,concreteType:"XDTUserDict",kind:"LinkedField",name:"user",plural:!1,selections:[{kind:"RequiredField",field:a,action:"THROW",path:"comments.user.pk"},{alias:null,args:null,kind:"ScalarField",name:"is_verified",storageKey:null},{kind:"RequiredField",field:{alias:null,args:null,kind:"ScalarField",name:"username",storageKey:null},action:"THROW",path:"comments.user.username"}],storageKey:null},{args:null,kind:"FragmentSpread",name:"PolarisCommentLikeButton_comment"}],storageKey:null}],type:"XDTMediaDict",abstractKey:null}}();e.exports=a}),null);
__d("usePolarisPostViewpointLogging.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"usePolarisPostViewpointLogging",selections:[{kind:"RequiredField",field:{alias:null,args:null,kind:"ScalarField",name:"pk",storageKey:null},action:"THROW",path:"pk"}],type:"XDTMediaDict",abstractKey:null};e.exports=a}),null);
__d("PolarisPostPageMetadataFragment.graphql",[],(function(a,b,c,d,e,f){"use strict";a=function(){var a=[{alias:null,args:null,kind:"ScalarField",name:"username",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"full_name",storageKey:null}];return{argumentDefinitions:[],kind:"Fragment",metadata:null,name:"PolarisPostPageMetadataFragment",selections:[{alias:null,args:null,concreteType:"XDTCommentDict",kind:"LinkedField",name:"caption",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"text",storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:"XDTUserDict",kind:"LinkedField",name:"group",plural:!1,selections:a,storageKey:null},{alias:null,args:null,concreteType:"XDTUserDict",kind:"LinkedField",name:"user",plural:!1,selections:a,storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"media_type",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"product_type",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"taken_at",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"title",storageKey:null},{args:null,kind:"FragmentSpread",name:"usePolarisMediaOwnerTypeFragment_media"}],type:"XDTMediaDict",abstractKey:null}}();e.exports=a}),null);
__d("PolarisPostPageWrapperFragment.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"PolarisPostPageWrapperFragment",selections:[{kind:"RequiredField",field:{alias:null,args:null,kind:"ScalarField",name:"pk",storageKey:null},action:"THROW",path:"pk"},{args:null,kind:"FragmentSpread",name:"PolarisPostPageMetadataFragment"},{alias:null,args:null,concreteType:"XDTUserDict",kind:"LinkedField",name:"user",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"latest_reel_media",storageKey:null}],storageKey:null},{args:null,kind:"FragmentSpread",name:"usePolarisMediaOwnerID"}],type:"XDTMediaDict",abstractKey:null};e.exports=a}),null);
__d("PolarisMobilePostCaption.next",["CometRelay","PolarisMobilePostCaptionFragment.graphql","PolarisPostFastCommentPrimitive.react","react"],(function(a,b,c,d,e,f,g){"use strict";var h,i=d("react"),j=h!==void 0?h:h=b("PolarisMobilePostCaptionFragment.graphql");function a(a){var b,e,f;a=a.queryReference;a=d("CometRelay").useFragment(j,a);b=(b=a.user)==null?void 0:b.username;e=(e=a.user)==null?void 0:e.pk;f=((f=a.user)==null?void 0:f.is_verified)===!0;a=(a=a.caption)==null?void 0:a.text;return b==null||e==null||a==null?null:i.jsx("div",{className:"x12nagc",children:i.jsx(c("PolarisPostFastCommentPrimitive.react"),{isAuthorVerified:f,isCaption:!0,text:a,userId:e,username:b})})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("PolarisMobilePostPreviewComments.next",["CometRelay","IGDSBox.react","PolarisCommentLikeButton.next","PolarisMobilePostPreviewCommentsFragment.graphql","PolarisPostFastCommentPrimitive.react","react"],(function(a,b,c,d,e,f,g){"use strict";var h,i=d("react"),j=h!==void 0?h:h=b("PolarisMobilePostPreviewCommentsFragment.graphql");function a(a){a=a.queryReference;a=d("CometRelay").useFragment(j,a);return a.comments==null||a.comments.length===0?null:i.jsx(c("IGDSBox.react"),{children:a.comments.map(function(a){return a.user!=null&&a.text!=null&&i.jsxs(c("IGDSBox.react"),{alignItems:"center",direction:"row",display:"flex",marginBottom:1,children:[i.jsx(c("PolarisPostFastCommentPrimitive.react"),{isAuthorVerified:a.user.is_verified===!0,text:a.text,userId:a.user.pk,username:a.user.username}),i.jsx(c("PolarisCommentLikeButton.next"),{isLarge:!1,queryReference:a})]},a.pk)})})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("PolarisMobilePostDetailsSection.next",["CometRelay","IGDSBox.react","PolarisMobilePostCaption.next","PolarisMobilePostDetailsSectionFragment.graphql","PolarisMobilePostPreviewComments.next","PolarisPostFastViewAllComments.next","PolarisPostFooter.next","PolarisPostTimestamp.react","PolarisPostUFI.next","PolarisReactRedux","XPolarisMobileAllCommentsControllerRouteBuilder","polarisUserSelectors","react","useCometRouterDispatcher"],(function(a,b,c,d,e,f,g){"use strict";var h,i=d("react"),j=d("react").useCallback,k={mainContent:{display:"x78zum5",flexDirection:"xdt5ytf",paddingTop:"x1yrsyyn",paddingEnd:"x1pi30zi",paddingBottom:"x1l90r2v",paddingStart:"x1swvt13",$$css:!0},likeButton:{marginStart:"xp7jhwk",$$css:!0},socialProof:{marginBottom:"x1e56ztr",marginTop:"x1xmf6yo",$$css:!0},ufi:{marginTop:"x1gslohp",$$css:!0}},l=h!==void 0?h:h=b("PolarisMobilePostDetailsSectionFragment.graphql");function a(a){a=a.queryReference;var b=d("CometRelay").useFragment(l,a);a=d("PolarisReactRedux").useSelector(d("polarisUserSelectors").getViewer);var e=c("useCometRouterDispatcher")(),f=j(function(){var a=c("XPolarisMobileAllCommentsControllerRouteBuilder").buildURL({shortcode:b.code});e==null?void 0:e.go(a,{})},[e,b.code]),g=Number(b.taken_at),h=b.comment_count!=null&&b.comments!=null&&b.comment_count>b.comments.length;return i.jsxs("div",{children:[i.jsxs("div",{className:"x78zum5 xdt5ytf x1yrsyyn x1pi30zi x1l90r2v x1swvt13",children:[i.jsx("div",{className:"x1gslohp",children:i.jsx(c("PolarisPostUFI.next"),{adQueryReference:null,likeButtonXStyle:k.likeButton,mediaQueryReference:b,onCommentButtonClick:f,socialProofXStyle:k.socialProof,viewer:a})}),i.jsx(c("PolarisMobilePostCaption.next"),{queryReference:b}),i.jsx(c("IGDSBox.react"),{marginBottom:1,children:h&&i.jsx(c("PolarisPostFastViewAllComments.next"),{fragmentKey:b,onViewAllCommentsClick:f})}),i.jsx(c("PolarisMobilePostPreviewComments.next"),{queryReference:b}),!isNaN(g)&&i.jsx(c("IGDSBox.react"),{alignItems:"center",direction:"row",marginTop:1,children:i.jsx(c("PolarisPostTimestamp.react"),{code:b.code,postedAt:g})})]}),i.jsx(c("PolarisPostFooter.next"),{analyticsContext:"postPage",queryReference:b})]})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("PolarisMobilePostHeader.next",["invariant","CometRelay","IGDSConstants","PolarisMediaConstants","PolarisMobilePostHeader.graphql","PolarisPostHeader.react","PolarisPostHeaderFavoritedIconButton.next","PolarisPostOptionsButtonPicker.react","PolarisReactRedux","polarisPostSelectors","polarisUserSelectors","react","usePolarisMediaOwnerType"],(function(a,b,c,d,e,f,g,h){"use strict";var i,j=d("react"),k=i!==void 0?i:i=b("PolarisMobilePostHeader.graphql");function a(a){var b;a=a.queryReference;var e=d("CometRelay").useFragment(k,a),f=d("PolarisReactRedux").useSelector(function(a){return d("polarisPostSelectors").getPostById(a,e.pk)});a=d("PolarisReactRedux").useSelector(function(a){return d("polarisPostSelectors").maybeGetOwnerByPost(a,f)});a!=null||h(0,67416);var g=d("PolarisReactRedux").useSelector(function(a){return d("polarisUserSelectors").getUserById(a,e.user.pk)}),i=c("usePolarisMediaOwnerType")(e),l=d("PolarisReactRedux").useSelector(d("polarisUserSelectors").getViewer);l=(l==null?void 0:l.id)===a.id;return j.jsxs("div",{className:"x78zum5 x1q0g3np",children:[j.jsx(c("PolarisPostHeader.react"),{analyticsContext:"postPage",clipsAudioAttributionInfo:f.clipsMusicAttributionInfo,headerAvatarSize:c("IGDSConstants").AVATAR_SIZES.small,inModal:!1,isAffiliate:((b=e.affiliate_info)==null?void 0:b.disclosure_tag)!=null,isOwnerGroupProfile:i==="group",isPaidPartnership:e.is_paid_partnership===!0,isSponsored:!1,isVideo:e.media_type===d("PolarisMediaConstants").MediaTypes.VIDEO,location:f.location,mediaId:e.pk,owner:a,postAuthor:g,shouldShowFollowButton:!l,showVerifiedBadge:!0,sidebarVariantOptionsButton:!0,sponsors:f.sponsors}),j.jsx(c("PolarisPostHeaderFavoritedIconButton.next"),{fragmentKey:e}),j.jsx(c("PolarisPostOptionsButtonPicker.react"),{buttonClassName:"x78zum5 xl56j7k x1ejlxp5",id:e.pk})]})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("usePolarisPostViewpointLogging",["CometRelay","PolarisOrganicImpressionAction","PolarisViewpointReact.react","PolarisVpvdImpressionAction","polarisPostSelectors","usePolarisPostViewpointLogging.graphql","usePolarisSelector"],(function(a,b,c,d,e,f,g){"use strict";var h,i=h!==void 0?h:h=b("usePolarisPostViewpointLogging.graphql");function a(a,b){var e=d("CometRelay").useFragment(i,a);a=c("usePolarisSelector")(function(a){return d("polarisPostSelectors").getPostById(a,e.pk)});a=[d("PolarisOrganicImpressionAction").makePostImpressionAction(a,b),d("PolarisVpvdImpressionAction").makePostVpvdImpressionAction(a,b)];return d("PolarisViewpointReact.react").useViewpoint({action:a,id:e.pk})}g["default"]=a}),98);
__d("PolarisMobilePost.next",["CometRelay","PolarisMedia.next","PolarisMobilePostDetailsSection.next","PolarisMobilePostFragment.graphql","PolarisMobilePostHeader.next","PolarisPostContext.react","react","usePolarisMediaInitialCarouselIndex","usePolarisPostViewpointLogging"],(function(a,b,c,d,e,f,g){"use strict";var h,i=d("react");e=d("react");var j=e.useCallback,k=e.useState,l=h!==void 0?h:h=b("PolarisMobilePostFragment.graphql");function a(a){a=a.queryReference;a=d("CometRelay").useFragment(l,a);var b=c("usePolarisMediaInitialCarouselIndex")(a),e=c("usePolarisPostViewpointLogging")(a,"postPage"),f=k(b),g=f[0],h=f[1];f=j(function(a,b,c){return h(b)},[h]);return i.jsx("div",{className:"x78zum5 xdt5ytf","data-testid":void 0,ref:e,children:i.jsxs(d("PolarisPostContext.react").PolarisPostContextProvider,{analyticsContext:"postPage",currentSidecarIndex:g,queryReference:a,children:[i.jsx(c("PolarisMobilePostHeader.next"),{queryReference:a}),i.jsx(c("PolarisMedia.next"),{analyticsContext:"postPage",handleMediaSidecarChildIndexChange:f,initialCarouselIndex:b,mediaFragmentKey:a}),i.jsx(c("PolarisMobilePostDetailsSection.next"),{queryReference:a})]})})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("PolarisMobileChainedPosts.next",["invariant","CometRelay","PolarisChainedPostsPaginationQuery","PolarisErrorBoundary.react","PolarisGenericVirtualFeed.react","PolarisMediaChainingPageConstants","PolarisMobilePost.next","emptyFunction","react","useCurrentRoute"],(function(a,b,c,d,e,f,g,h){"use strict";var i=d("react"),j=d("react").useCallback;function a(a){a=a.queryReference;a=d("CometRelay").usePaginationFragment(c("PolarisChainedPostsPaginationQuery"),a);var b=a.data,e=a.isLoadingNext,f=a.loadNext,g=b.xdt_api__v1__discover__chaining_experience_feed_connection.edges.map(function(a){return a.node.media_or_ad});a=c("useCurrentRoute")();var k=a==null?void 0:(b=a.rootView.props)==null?void 0:b.media_id;k!=null||h(0,68702);a=j(function(){f(10,{UNSTABLE_extraVariables:{data:{media_id:k,num_total_items:g.length}}})},[g.length,f,k]);b=j(function(a){a=a.index;return g[a]==null?null:i.jsx(c("PolarisErrorBoundary.react"),{errorRenderer:c("emptyFunction").thatReturnsNull,children:i.jsx(c("PolarisMobilePost.next"),{queryReference:g[a]})},a)},[g]);return i.jsx(c("PolarisGenericVirtualFeed.react"),{allowSampledScrollLogging:!1,analyticsContext:d("PolarisMediaChainingPageConstants").MEDIA_CHAINING_ANALYTICS_CONTEXT,enablePrefetch:!1,enablePriorityFetching:!0,hasNextPage:!0,isFetching:e,items:g,onNextPage:a,renderFeedItem:b,visibleCount:g.length})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("PolarisMobileChainedPostsContainer.next",["CometRelay","PolarisChainedPostsRootQuery","PolarisMobileChainedPosts.next","react"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react");function a(a){a=a.polarisPostChainingRootQuery;a=d("CometRelay").usePreloadedQuery(c("PolarisChainedPostsRootQuery"),a);return h.jsx(c("PolarisMobileChainedPosts.next"),{queryReference:a})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("PolarisPostPageMetadata.next",["CometRelay","PolarisMonitorErrors","PolarisPageMetadata.react","PolarisPostPageMetadataFragment.graphql","err","getPolarisTitleForPost","polarisGetPostFromGraphMediaInterface","react","usePolarisMediaOwnerType"],(function(a,b,c,d,e,f,g){"use strict";var h,i=d("react"),j=h!==void 0?h:h=b("PolarisPostPageMetadataFragment.graphql");function a(a){var b,e=a.pageIdentifier;a=a.queryReference;a=d("CometRelay").useFragment(j,a);var f=c("usePolarisMediaOwnerType")(a);f=f==="group"?a.group:a.user;if(f==null){d("PolarisMonitorErrors").logError(c("err")("Post owner was unexpectedly null"));return null}b=d("polarisGetPostFromGraphMediaInterface").isClipsProductType(a.product_type)&&a.title!=null&&a.title.trim()!==""?a.title:c("getPolarisTitleForPost")({caption:(b=a.caption)==null?void 0:b.text,isVideo:a.media_type===2,postedAt:Number(a.taken_at)},{fullName:f.full_name,username:f.username});return i.jsx(c("PolarisPageMetadata.react"),{base:"",id:e,title:b})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("PolarisPostPageWrapper.react",["CometRelay","FBLogger","PolarisAsyncEntityQRModal","PolarisPostActionLoadPostPageExtras","PolarisPostPageMetadata.next","PolarisPostPageWrapperFragment.graphql","PolarisReactRedux","polarisStorySelectors","qex","react","useCurrentRoute","usePolarisBoostDialog","usePolarisMediaOwnerID","usePolarisSelector"],(function(a,b,c,d,e,f,g){"use strict";var h,i=d("react");e=d("react");var j=e.useEffect,k=e.useRef,l=e.useState,m=h!==void 0?h:h=b("PolarisPostPageWrapperFragment.graphql");function a(a){var b=a.children;a=a.queryReference;var e=d("CometRelay").useFragment(m,a);a=c("useCurrentRoute")();a=l((a==null?void 0:(a=a.rootView.props)==null?void 0:a.qr)===!0);var f=a[0],g=a[1];a=window.location.search;a=new URLSearchParams(a);var h=a.get("show_boost_modal")==="true",n=c("usePolarisBoostDialog")(a),o=k(!1);j(function(){h&&o.current===!1&&(n(),o.current=!0)},[h,n]);var p=c("usePolarisMediaOwnerID")(e);if(p==null)throw c("FBLogger")("ig_web").mustfixThrow("ownerId unexpectedly null");var q=c("usePolarisSelector")(function(a){return d("polarisStorySelectors").userHasReel(a,p)}),r=d("PolarisReactRedux").useDispatch(),s=k(!1);j(function(){var a;((a=e.user)==null?void 0:a.latest_reel_media)!=null&&!q&&!s.current&&c("qex")._("521")!==!0&&(r(d("PolarisPostActionLoadPostPageExtras").loadPostPageExtras(e.pk,{fetchReel:!0})),s.current=!0)},[r,q,e.pk,(a=e.user)==null?void 0:a.latest_reel_media]);return i.jsxs(i.Fragment,{children:[i.jsx(c("PolarisPostPageMetadata.next"),{pageIdentifier:"postPage",queryReference:e}),b,f===!0&&i.jsx(c("PolarisAsyncEntityQRModal"),{entityID:e.pk,onClose:function(){return g(!1)},source:"DIRECT_NAVIGATION"})]})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("PolarisMobilePostPage.next",["CometRelay","ErrorBoundary.react","FBLogger","PolarisMobilePost.next","PolarisPostPageGatedContentAPIReasonFallback.react","PolarisPostPageWrapper.react","PolarisPostRootQuery.graphql","react"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react"),i=d("react").useCallback;function j(a){a=a.polarisPostRootQuery;a=d("CometRelay").usePreloadedQuery(c("PolarisPostRootQuery.graphql"),a);a=(a=a.xdt_api__v1__media__shortcode__web_info.items)==null?void 0:a[0];if(a==null)throw c("FBLogger")("ig_web").mustfixThrow("Post page item does not exist");return h.jsx(c("PolarisPostPageWrapper.react"),{queryReference:a,children:h.jsx("div",{className:"xh8yej3","data-testid":void 0,children:h.jsx(c("PolarisMobilePost.next"),{queryReference:a})})})}j.displayName=j.name+" [from "+f.id+"]";function a(a){var b=i(function(b){return h.jsx(c("PolarisPostPageGatedContentAPIReasonFallback.react"),{error:b,fullpage:!1,postId:a.postId})},[a.postId]);return h.jsx(c("ErrorBoundary.react"),{fallback:b,children:h.jsx(j,babelHelpers["extends"]({},a))})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);