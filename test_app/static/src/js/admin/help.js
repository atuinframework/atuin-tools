$(function () {
	$('.uiHelpBtn').on('click', function () {
		var btn = $(this);

		$('.helpPopover').popover({
			trigger: 'manual'
		});

		$('.helpPopover').popover('toggle');
	});

	$('.uiSupportBtn').on('click', function () {
		var btn = $(this);

		$('#SupportModal').modal('show');
	});
});
