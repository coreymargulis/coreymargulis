jQuery(document).ready(function(t){postboxes.add_postbox_toggles("comment");var m=t("#timestamp").html();t(".edit-timestamp").click(function(){return t("#timestampdiv").is(":hidden")&&(t("#timestampdiv").slideDown("normal"),t(".edit-timestamp").hide()),!1}),t(".cancel-timestamp").click(function(){return t("#timestampdiv").slideUp("normal"),t("#mm").val(t("#hidden_mm").val()),t("#jj").val(t("#hidden_jj").val()),t("#aa").val(t("#hidden_aa").val()),t("#hh").val(t("#hidden_hh").val()),t("#mn").val(t("#hidden_mn").val()),t("#timestamp").html(m),t(".edit-timestamp").show(),!1}),t(".save-timestamp").click(function(){var m=t("#aa").val(),a=t("#mm").val(),e=t("#jj").val(),i=t("#hh").val(),l=t("#mn").val(),n=new Date(m,a-1,e,i,l);return n.getFullYear()!=m||1+n.getMonth()!=a||n.getDate()!=e||n.getMinutes()!=l?(t(".timestamp-wrap","#timestampdiv").addClass("form-invalid"),!1):(t(".timestamp-wrap","#timestampdiv").removeClass("form-invalid"),t("#timestampdiv").slideUp("normal"),t(".edit-timestamp").show(),t("#timestamp").html(commentL10n.submittedOn+" <b>"+t('#mm option[value="'+a+'"]').text()+" "+e+", "+m+" @ "+i+":"+l+"</b> "),!1)})});