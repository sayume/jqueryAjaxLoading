(function($){

	'use strict';

	$.extend($.fn,{
		ajaxLoading: function(options){

			//check whether an ajaxloader is already created, if created, return the ajaxLoader.
			var ajaxLoader=$.data(this[0]||window,'ajaxLoader');
			if(ajaxLoader){
				$.ajaxLoader.setDefaults(options);
				return ajaxLoader;
			}
			ajaxLoader= new $.ajaxLoader(options);
			$.data(this[0]||window,'ajaxLoader',ajaxLoader);
		}
	});

	$.ajaxLoader=function(options){
		$.extend(true,{},$.ajaxLoader.defaults,options);
		this.init();
	};

	$.extend($.ajaxLoader,{

		defaults:{
			onStatistics:false
		},

		setDefaults:function(settings){
			$.extend(this.defaults,settings);
		},

		register:function(bundles){
			this.prototype.register(bundles);
		},

		prototype:{

			bindings:[],

		    register:function(bundles){
				for(var i=0;i<bundles.length;i++){
					this.addBinding(bundles[i]);
				}
		    },


			init:function(){

				var ajaxLoader=$.ajaxLoader.prototype;

				$(document).ajaxSend(function(event,jqxhr,settings){
					var url=settings.url;
					var binding=ajaxLoader.getBinding(url);
					if(binding){
						ajaxLoader.loadStart(binding);
					}
				});

				$(document).ajaxComplete(function(event,jqxhr,settings){
					var url=settings.url;
					var binding=ajaxLoader.getBinding(url);
					if(binding){
						ajaxLoader.loadEnd(binding);
					}
				});

			},

			addBinding:function(binding){
				var bindings=this.bindings;
				for(var i=0;i<bindings.length;i++){
					if(binding.url===this.bindings[i].method){
						this.bindings[i].type=binding.type;
						this.bindings[i].src=binding.src;
						return false;
					}
				}
				bindings.push(binding);
				return false;
			},

			getBinding:function(url){
				var binding=this.bindings;

				//only return the first binding of an ajax method.
				for(var i=0;i<binding.length;i++){
					if(binding[i].url===url){
						return binding[i];
					}
				}

			},

			loadStart:function(binding){
				var type=binding.type,
				element=binding.element,
				src=binding.src;

				if(type==="text"){
					$(element).append(src);
				}

				if(type==="image"){
					var image=$('<img />');
					image.attr('src',src);
					$(element).append(image);
				}
			},

			loadEnd:function(binding){
				var element=binding.element;
				$(element).empty();
			}

	    }
	});

})(jQuery);