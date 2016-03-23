prism.on('dashboardloaded', function() {

    var dash = prism.activeDashboard,
        widgets = dash.widgets.$$widgets,
        plugins = prism._plugins.map(function(i) {
            return i.substring(7);
        });

    if (dash.hasOwnProperty('widgets') && widgets) {
        iFrameLoad('Leave Feedback', 'https://goo.gl/s4RF3f');
        _.each(widgets, function(w) {
            w.on('initialized', function() {
                labelTruncate(w);
                pivotFix(w);
            });
        });
    }
});
