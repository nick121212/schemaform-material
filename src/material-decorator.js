(function (angular, undefined) {
    'use strict';
    angular
        .module('schemaForm')
        .config(materialDecoratorConfig)
        .filter('sfCamelKey', sfCamelKeyFilter);

    materialDecoratorConfig.$inject = [
        'schemaFormProvider', 'schemaFormDecoratorsProvider', 'sfBuilderProvider', 'sfPathProvider', '$injector'
    ];

    function materialDecoratorConfig(schemaFormProvider, decoratorsProvider, sfBuilderProvider, sfPathProvider, $injector) {
        var base = 'decorators/material/';

        var simpleTransclusion = sfBuilderProvider.builders.simpleTransclusion;
        var ngModelOptions = sfBuilderProvider.builders.ngModelOptions;
        var ngModel = sfBuilderProvider.builders.ngModel;
        var sfField = sfBuilderProvider.builders.sfField;
        var condition = sfBuilderProvider.builders.condition;
        var array = sfBuilderProvider.builders.array;

        var sfMessagesNode = sfMessagesNodeHandler();
        var sfMessages = sfMessagesBuilder;
        var sfOptions = sfOptionsBuilder;
        var mdAutocomplete = mdAutocompleteBuilder;
        var mdSwitch = mdSwitchBuilder;
        var mdDatepicker = mdDatepickerBuilder;
        var mdTabs = mdTabsBuilder;

        var core = [sfField, ngModel, ngModelOptions, condition];
        var defaults = core.concat(sfMessages);
        var arrays = core.concat(array);

        schemaFormProvider.defaults.string.unshift(dateDefault);

        decoratorsProvider.defineDecorator('materialDecorator', {
            actions: {template: base + 'actions.html', builder: [sfField, simpleTransclusion, condition]},
            array: {template: base + 'array.html', builder: arrays},
            autocomplete: {template: base + 'autocomplete.html', builder: defaults.concat(mdAutocomplete)},
            boolean: {template: base + 'checkbox.html', builder: defaults},
            button: {template: base + 'submit.html', builder: defaults},
            checkbox: {template: base + 'checkbox.html', builder: defaults},
            checkboxes: {template: base + 'checkboxes.html', builder: arrays},
            date: {template: base + 'date.html', builder: defaults.concat(mdDatepicker)},
            'default': {template: base + 'default.html', builder: defaults},
            fieldset: {template: base + 'fieldset.html', builder: [sfField, simpleTransclusion, condition]},
            help: {template: base + 'help.html', builder: defaults},
            number: {template: base + 'default.html', builder: defaults},
            password: {template: base + 'default.html', builder: defaults},
            radios: {template: base + 'radios.html', builder: defaults},
            'radios-inline': {template: base + 'radios-inline.html', builder: defaults},
            radiobuttons: {template: base + 'radio-buttons.html', builder: defaults},
            section: {template: base + 'section.html', builder: [sfField, condition]},
            select: {template: base + 'select.html', builder: defaults.concat(sfOptions)},
            submit: {template: base + 'submit.html', builder: defaults},
            tabs: {template: base + 'tabs.html', builder: [sfField, mdTabs, condition]},
            tabarray: {template: base + 'tabarray.html', builder: arrays},
            textarea: {template: base + 'textarea.html', builder: defaults},
            switch: {template: base + 'switch.html', builder: defaults.concat(mdSwitch)}
        });

        function sfMessagesNodeHandler() {
            var html = '<div ng-if="ngModel.$invalid" ng-messages="ngModel.$error"><div sf-message ng-message></div></div>';
            var div = document.createElement('div');
            div.innerHTML = html;
            return div.firstChild;
        };

        function sfMessagesBuilder(args) {
            var messagesDiv = args.fieldFrag.querySelector('[sf-messages]');
            if (messagesDiv && sfMessagesNode) {
                var child = sfMessagesNode.cloneNode();
                messagesDiv.appendChild(child);
            }
        };

        function mdAutocompleteBuilder(args) {
            var mdAutocompleteFrag = args.fieldFrag.querySelector('md-autocomplete');
            var minLength = args.form.minLength || 1;
            var maxLength = args.form.maxLength || false;
            var title = args.form.title || args.form.placeholder || args.form.key.slice(-1)[0];

            if (mdAutocompleteFrag) {
                if (args.form.onChange) {
                    mdAutocompleteFrag.setAttribute('md-selected-item-change', 'form.onChange(item, form, model, modelArray, $index)');
                    mdAutocompleteFrag.setAttribute('md-search-text-change', 'form.onTextChange(searchText)');
                }
                ;

                // mdAutocompleteFrag.setAttribute('md-items', 'item in $filter(''autocomplete'')(searchText);');
                mdAutocompleteFrag.setAttribute('md-min-length', minLength);
                if (maxLength) {
                    mdAutocompleteFrag.setAttribute('md-max-length', maxLength);
                }
                ;

                if (title) {
                    mdAutocompleteFrag.setAttribute('md-floating-label', title);
                }
                ;
            }
        };

        function mdSwitchBuilder(args) {
            var mdSwitchFrag = args.fieldFrag.querySelector('md-switch');
            if (args.form.schema.titleMap) {
                mdSwitchFrag.setAttribute('ng-true-value', args.form.schema.titleMap.true);
                mdSwitchFrag.setAttribute('ng-false-value', args.form.schema.titleMap.false);
            }
            if (args.form.schema.ink) {
                mdSwitchFrag.setIdAttribute('md-no-ink', args.form.schema.ink);
            }
        };

        function sfOptionsBuilder(args) {
            var enumTitleMap = [];
            var i;
            var mdSelectFrag;

            args.form.getOptions = getOptionsHandler;

            if (args.form.titleMap) {
                args.form.selectOptions = args.form.titleMap;
            }
            else if (args.form.enum && args.form.enum.length) {
                for (i = 0; i < args.form.enum.length; i++) {
                    if (args.form.enum[i] && args.form.enum[i].length) {
                        enumTitleMap.push({name: args.form.enum[i], value: args.form.enum[i]});
                    }
                    ;
                }
                ;
                args.form.selectOptions = enumTitleMap;
            }
            ;

            // TODO implement $watch for remote data loading after the page loads
            function getOptionsHandler(form, evalExpr, $watch) {
                if (form.optionData) {
                    return evalExpr(form.optionData);
                }
                ;

                if (form.selectOptions) {
                    return form.selectOptions;
                }
                ;

                return [];
            };
        };

        function mdDatepickerBuilder(args) {
            var mdDatepickerFrag = args.fieldFrag.querySelector('md-datepicker');
            if (mdDatepickerFrag) {
                if (args.form.onChange) {
                    mdDatepickerFrag.setAttribute('ng-change', 'args.form.onChange(searchText)');
                }
                // mdDatepickerFrag.setAttribute('md-items', 'item in $filter(''autocomplete'')(searchText);');
                var minDate = args.form.minimum || false;
                var maxDate = args.form.maximum || false;
                if (minDate) {
                    mdDatepickerFrag.setAttribute('md-max-date', minDate);
                }
                if (maxDate) {
                    mdDatepickerFrag.setAttribute('md-max-date', maxDate);
                }
            }
        };

        function mdTabsBuilder(args) {
            if (args.form.tabs && args.form.tabs.length > 0) {
                var mdTabsFrag = args.fieldFrag.querySelector('md-tabs');

                args.form.tabs.forEach(function (tab, index) {
                    var mdTab = document.createElement('md-tab');
                    mdTab.setAttribute('label', '{{' + args.path + '.tabs[' + index + '].title}}');
                    var mdTabBody = document.createElement('md-tab-body');
                    var childFrag = args.build(tab.items, args.path + '.tabs[' + index + '].items', args.state);
                    mdTabBody.appendChild(childFrag);
                    mdTab.appendChild(mdTabBody);
                    mdTabsFrag.appendChild(mdTab);
                });
            }
        };

        /**
         * Material Datepicker
         */
        function dateDefault(name, schema, options) {
            if (schema.type === 'string' && (schema.format === 'date' || schema.format === 'date-time')) {
                var f = schemaFormProvider.stdFormObj(name, schema, options);
                f.key = options.path;
                f.type = 'date';
                options.lookup[sfPathProvider.stringify(options.path)] = f;
                return f;
            }
        };
    };

    /**
     * sfCamelKey Filter
     */
    function sfCamelKeyFilter() {
        return function (formKey) {

            if (!formKey) return '';
            return formKey.join('-');

            var part, i, key;
            key = formKey.slice();
            for (i = 0; i < key.length; i++) {
                part = key[i].toLowerCase().split('');
                if (i && part.length) part[0] = part[0].toUpperCase();
                key[i] = part.join('');
            }
            ;
            return key.join('');
        };
    };

})(angular, undefined);
/*
 TODO add default filter for autocomplete which allows form.optionFilter or 'autocompleteFilter' to override
 Something along the following lines...
 if ($injector.has('autocompleteFilter')) {
 result = $filter('autocomplete')(input);
 }
 else
 if ($injector.has(args.form.optionFilter + 'Filter')) {
 result = $filter(args.form.optionFilter)(input);
 }
 else {
 if (args.form.optionFilter) {
 mdAutocomplete.setAttribute('md-items',
 'item in evalExpr("this[\""+form.optionFilter+"\"](\""+searchText+"\")")');
 }
 }

 .filter('autocompleteMovieTest', function() {
 function autocompleteMovieTestFilter(array, input){
 var current = input;
 // You could also call multiple filters here using:
 // current = $filter('filterName')(input)
 if(typeof current === 'string') {
 current = current.replace(' ','-').toLowerCase();
 }
 current = (!current) ? '_undefined' : current;
 return current;
 }

 return externalOptionUriFilter;
 })
 */
