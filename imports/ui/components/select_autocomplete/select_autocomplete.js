import './select_autocomplete.html';

Template.select_autocomplete.onCreated(function () {
    //
});

Template.select_autocomplete.onRendered(function () {
    var self = this;
    self.autorun( function () {
        console.log("select_autocomplete autorun");
        var dat = Template.currentData();

        var params = {
            plugins: ['remove_button'],
            options: dat.list
        }
        if (typeof dat.onItemAdd !== "undefined") {
            params.onItemAdd = dat.onItemAdd;
        }
        if (typeof dat.onItemRemove !== "undefined") {
            params.onItemRemove = dat.onItemRemove;
        }
        let $select = $('#'+dat.id+dat.id2).selectize(params);
        $select[0].selectize.clear(true);
        $select[0].selectize.clearOptions();
        $select[0].selectize.addOption(dat.list);
        for (let i in dat.selected) {
            $select[0].selectize.addItem(dat.selected[i],true);
        }
        $select[0].selectize.refreshItems();
    });
});