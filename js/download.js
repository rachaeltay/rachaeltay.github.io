<script>
jQuery(document).ready(function() {
  var downloadButton = jQuery('.site-btn');

  downloadButton.each(function(index) {
    jQuery(this).attr('download', 'rachael_resume');
  });
});
</script>
