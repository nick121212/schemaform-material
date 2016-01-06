define(["angular","schemaForm"],function(angular,schemaForm){
angular.module("schemaForm").run(["$templateCache", function($templateCache) {$templateCache.put("decorators/material/actions-trcl.html","<div class=\"btn-group schema-form-actions {{form.htmlClass}}\" ng-transclude=\"\"></div>");
$templateCache.put("decorators/material/actions.html","<section layout=\"row\" class=\"btn-group schema-form-actions {{form.htmlClass}}\"></section>");
$templateCache.put("decorators/material/array.html","<div class=\"schema-form-{{form.type}} {{form.htmlClass}}\" md-theme=\"dark\" sf-field-model=\"sf-new-array\" sf-new-array=\"$$value$$\"><div layout=\"row\" style=\"padding: 0;\" class=\"md-toolbar-tools\"><label class=\"control-label\" flex=\"\" ng-show=\"showTitle()\">{{ form.title }}</label><md-button class=\"md-icon-button\" aria-label=\"add\" ng-if=\"!modelArray || modelArray.length==0\" ng-hide=\"form.readonly || form.add === null\" ng-click=\"appendToArray()\" ng-disabled=\"form.schema.maxItems <= modelArray.length\"><ng-md-icon icon=\"add\"></ng-md-icon></md-button></div><md-list class=\"list-group\" ng-model=\"modelArray\" ui-sortable=\"form.sortOptions\"><md-list-item layout=\"row\" layout-padding=\"\" class=\"list-group-item md-whiteframe-3dp\" ng-repeat=\"item in modelArray track by $index\"><md-content flex=\"\" class=\"{{form.fieldHtmlClass}}\"><label style=\"margin: 5px;\">{{ (form.subTitle || form.title) + ($index+1) }}</label><sf-decorator ng-init=\"arrayIndex = $index; sectionClass = form.sectionClass\" flex=\"\" form=\"copyWithIndex($index)\"></sf-decorator></md-content><md-content layout=\"column\" flex=\"none\" flex-order=\"2\"><md-button class=\"md-icon-button\" aria-label=\"remove\" ng-hide=\"form.readonly || form.remove === null\" ng-click=\"deleteFromArray($index)\" ng-disabled=\"form.schema.minItems >= modelArray.length\"><ng-md-icon icon=\"delete\"></ng-md-icon></md-button><md-button class=\"md-icon-button\" aria-label=\"add\" ng-hide=\"form.readonly || form.add === null\" ng-click=\"appendToArray()\" ng-disabled=\"form.schema.maxItems <= modelArray.length\"><ng-md-icon icon=\"add\"></ng-md-icon></md-button></md-content></md-list-item></md-list></div>");
$templateCache.put("decorators/material/autocomplete.html","<div class=\"form-group {{form.htmlClass}} schema-form-select\" sf-layout=\"\"><md-autocomplete ng-disabled=\"form.readonly\" ng-model=\"$$value$$\" sf-autocomplete=\"\" sf-field-model=\"replaceAll\" schema-validate=\"form\" md-autoselect=\"true\" md-selected-item=\"$$value$$\" md-search-text=\"searchText\" md-selected-item-change=\"form.onChange(item, form, model, modelArray, arrayIndex)\" md-items=\"item in form.query(searchText)\" md-item-text=\"item[form.textField]\" md-floating-label=\"{{::form.title}}\" md-menu-class=\"autocomplete-custom-template\"><md-item-template><span md-highlight-text=\"searchText\">{{ item[form.textField] }}</span></md-item-template><md-not-found>No matches found</md-not-found></md-autocomplete><md-input-container style=\"padding: 0;margin: 0;\" name=\"{{form.key|sfCamelKey}}\" md-is-error=\"!$root.isEmptyObject(ngModel.$error)\" ng-model=\"$$value$$\" sf-field-model=\"\" schema-validate=\"form\"><div ng-messages=\"ngModel.$error\"><div sf-message=\"\" ng-message=\"\"></div><div class=\"md-char-counter\">{{ form.description }}</div></div></md-input-container></div>");
$templateCache.put("decorators/material/checkbox.html","<div class=\"checkbox schema-form-checkbox {{::form.htmlClass}}\"><md-checkbox sf-field-model=\"\" ng-model=\"$$value$$\" ng-disabled=\"form.readonly\" schema-validate=\"form\" sf-changed=\"form\" ng-model-options=\"form.ngModelOptions\" ng-true-value=\"{{form.trueValue || true}}\" ng-false-value=\"{{form.falseValue || false}}\" ng-class=\"form.fieldHtmlClass\" name=\"{{::form.key|sfCamelKey}}\" aria-label=\"{{::form.title}}\"><span>{{::form.title}}</span></md-checkbox><md-input-container md-is-error=\"!$root.isEmptyObject(ngModel.$error)\"><div ng-messages=\"ngModel.$error\"><div sf-message=\"\" ng-message=\"\"></div></div><div class=\"md-char-counter\">{{ form.description }}</div></md-input-container></div>");
$templateCache.put("decorators/material/checkboxes.html","<div sf-array=\"form\" sf-field-model=\"\" class=\"form-group schema-form-checkboxes {{::form.htmlClass}}\" sf-messages=\"\"><div layout=\"row\" style=\"padding: 0;\" class=\"md-toolbar-tools\"><label class=\"control-label\" flex=\"\" ng-show=\"showTitle()\">{{ form.title }}</label></div><md-content ng-class=\"form.fieldHtmlClass\"><div class=\"checkbox\" ng-repeat=\"val in titleMapValues track by $index\"><md-checkbox ng-model=\"titleMapValues[$index]\" sf-changed=\"form\" ng-disabled=\"::form.readonly\" name=\"{{::form.key|sfCamelKey}}\" ng-true-value=\"true\" ng-false-value=\"false\" aria-label=\"{{::form.title}}\">{{::form.titleMap[$index].name}}</md-checkbox></div></md-content></div>");
$templateCache.put("decorators/material/chips.html","<div class=\"form-group schema-form-chips {{form.htmlClass}}\" ng-class=\"{\'has-error\': hasError(), \'has-success\': hasSuccess(), \'has-feedback\': form.feedback !== false}\"><md-chips sf-field-model=\"\" readonly=\"form.readonly\" flex=\"\" placeholder=\"{{::form.title}}\"><md-chip-template><strong ng-if=\"!form.template\">{{$chip}}</strong></md-chip-template></md-chips><div ng-messages=\"ngModel.$error\"><div class=\"md-char-counter\">{{ form.description }}</div><div sf-message=\"\" ng-message=\"\"></div></div></div>");
$templateCache.put("decorators/material/date.html","<div class=\"schema-form-date {{::form.htmlClass}}\"><label ng-show=\"showTitle()\" for=\"{{::form.key|sfCamelKey}}\">{{::form.title}}</label><md-datepicker sf-field-model=\"\" sf-changed=\"form\" schema-validate=\"form\" sf-type-parser=\"form.schema\" id=\"{{::form.key|sfCamelKey}}\" ng-show=\"::form.key\" ng-class=\"::form.fieldHtmlClass\" ng-disabled=\"::form.readonly\" md-placeholder=\"Enter date\" sf-messages=\"\"></md-datepicker></div>");
$templateCache.put("decorators/material/default.html","<md-input-container class=\"schema-form-input md-block\" md-is-error=\"!$root.isEmptyObject(ngModel.$error)\" ng-class=\"::form.htmlClass\" sf-layout=\"\" aria-label=\"{{ ::form.title }}\"><md-icon ng-if=\"form.icon\"><ng-md-icon style=\"{{form.icon.style}}\" icon=\"{{ form.icon.icon }}\"></ng-md-icon></md-icon><label ng-show=\"showTitle()\">{{::form.title}}</label> <input sf-field-model=\"\" ng-model=\"$$value$$\" schema-validate=\"form\" type=\"{{form.type}}\" aria-label=\"{{ form.title }}\" ng-class=\"form.fieldHtmlClass\" ng-disabled=\"form.readonly\" name=\"{{form.key|sfCamelKey}}\"><div ng-messages=\"ngModel.$error\"><div sf-message=\"\" ng-message=\"\"></div></div><div class=\"md-char-counter\">{{ form.description }}</div></md-input-container>");
$templateCache.put("decorators/material/fieldset-trcl.html","<fieldset ng-disabled=\"form.readonly\" class=\"standard {{form.htmlClass}}\" flex=\"\"><legend ng-show=\"form.title\">{{ form.title }}</legend><div ng-transclude=\"\"></div></fieldset>");
$templateCache.put("decorators/material/fieldset.html","<fieldset ng-disabled=\"form.readonly\" class=\"standard {{form.htmlClass}}\" flex=\"\"><legend ng-show=\"form.title\">{{ form.title }}</legend><sf-decorator ng-repeat=\"item in form.items\" form=\"item\"></sf-decorator></fieldset>");
$templateCache.put("decorators/material/help.html","<div class=\"helpvalue schema-form-helpvalue {{form.htmlClass}}\" ng-bind-html=\"form.helpValue\"></div>");
$templateCache.put("decorators/material/radio-buttons.html","<div class=\"form-group schema-form-radiobuttons {{form.htmlClass}}\" ng-class=\"{\'has-error\': hasError(), \'has-success\': hasSuccess()}\"><div><label class=\"control-label\" ng-show=\"showTitle()\">{{form.title}}</label></div><section layout=\"row\" layout-sm=\"column\" layout-align=\"center center\"><md-input-container ng-repeat=\"item in form.titleMap\"><md-button type=\"button\" class=\"group md-raised\" sf-field-model=\"replaceAll\" ng-model=\"$$value$$\" sf-changed=\"form\" ng-class=\"{\'md-primary\': ($$value$$ == item.value)}\" ng-disabled=\"form.readonly\" ng-model-options=\"form.ngModelOptions\" schema-validate=\"form\" ng-value=\"item.value\" ng-click=\"$$value$$ = item.value\" name=\"{{form.key.join(\'.\')}}\"><span ng-bind-html=\"item.name\"></span></md-button></md-input-container></section><div class=\"help-block\" sf-message=\"form.description\"></div></div>");
$templateCache.put("decorators/material/radios-inline.html","<div class=\"form-group schema-form-radios-inline {{form.htmlClass}}\" ng-class=\"{\'has-error\': hasError(), \'has-success\': hasSuccess()}\"><label class=\"control-label\" ng-show=\"showTitle()\">{{form.title}}</label><md-radio-group layout=\"row\" sf-field-model=\"replaceAll\" ng-model=\"$$value$$\" class=\"{{form.fieldHtmlClass}}\" ng-class=\"{ active: item.value === $$value$$ }\" sf-changed=\"form\" schema-validate=\"form\" ng-disabled=\"form.readonly\" name=\"{{form.key.join(\'.\')}}\"><md-radio-button ng-repeat=\"item in form.titleMap\" ng-value=\"item.value\"><span ng-bind-html=\"item.name\"></span></md-radio-button></md-radio-group><div ng-messages=\"ngModel.$error\"><div sf-message=\"\" ng-message=\"\"></div></div></div>");
$templateCache.put("decorators/material/radios.html","<div class=\"form-group schema-form-radios {{form.htmlClass}}\" ng-class=\"{\'has-error\': hasError(), \'has-success\': hasSuccess()}\"><label class=\"control-label\" ng-show=\"showTitle()\" aria-label=\"{{form.title}}\">{{form.title}} {{form.titleMap | json}}</label><md-radio-group sf-field-model=\"\" sf-changed=\"form\" ng-disabled=\"form.readonly\" name=\"{{form.key.join(\'.\')}}\"><md-radio-button ng-repeat=\"item in form.titleMap\" ng-value=\"item.value\" class=\"{{form.fieldHtmlClass}}\" sf-field-model=\"ng-class\" ng-class=\"{ active: item.value === $$value$$ }\"><span ng-bind-html=\"item.name\"></span></md-radio-button></md-radio-group><div ng-messages=\"ngModel.$error\"><div class=\"md-char-counter\">{{ form.description }}</div><div sf-message=\"\" ng-message=\"\"></div></div></div>");
$templateCache.put("decorators/material/section.html","<md-content class=\"schema-form-section {{::form.htmlClass}} {{ ::sectionClass }}\" flex=\"\" sf-layout=\"\"><sf-decorator class=\"{{ ::item.fieldClass }}\" ng-repeat=\"item in form.items\" form=\"item\"></sf-decorator></md-content>");
$templateCache.put("decorators/material/select.html","<md-input-container style=\"padding-bottom: 0;\" md-is-error=\"!$root.isEmptyObject(ngModel.$error)\" class=\"form-group {{::form.htmlClass}} schema-form-select\" sf-layout=\"\"><label ng-show=\"::showTitle()\">{{::form.title}}</label><md-select sf-field-model=\"\" name=\"{{ ::form.key|sfCamelKey }}\" schema-validate=\"form\" ng-model=\"$$value$$\"><md-optgroup ng-repeat-start=\"(key, opt) in form.titleMap\" ng-if=\"opt.group && opt.group != optGroups[key-1].group\" label=\"{{::opt.group}}\" aria-label=\"{{::opt.group}}\"><md-option ng-repeat=\"(key, filtered) in form.titleMap\" ng-value=\"::filtered.value\" aria-label=\"{{::filtered.name}}\">{{::filtered.name}}</md-option></md-optgroup><md-option ng-if=\"!opt.group\" ng-value=\"::opt.value\" ng-repeat-end=\"\">{{::opt.name}}</md-option></md-select><div ng-messages=\"ngModel.$error\"><div sf-message=\"\" ng-message=\"\"></div></div><div class=\"md-char-counter\">{{ form.description }}</div></md-input-container>");
$templateCache.put("decorators/material/submit.html","<section class=\"schema-form-submit {{form.htmlClass}}\" sf-messages=\"\"><md-button class=\"md-raised {{ form.style || \'md-primary\' }} {{form.fieldHtmlClass}}\" type=\"{{ ::form.type }}\" ng-disabled=\"form.readonly\" aria-label=\"{{::form.title}}\">{{::form.title}}</md-button></section>");
$templateCache.put("decorators/material/switch.html","<md-input-container class=\"schema-form-switch {{::form.htmlClass}}\"><md-switch sf-field-model=\"\" sf-changed=\"form\" sf-type-parser=\"form.schema\" sf-messages=\"\" schema-validate=\"form\" id=\"{{::form.key}}\" aria-label=\"{{form.title}}\" ng-show=\"::form.key\" ng-class=\"form.fieldHtmlClass\" ng-disabled=\"::form.readonly\"><span ng-show=\"showTitle()\" for=\"{{::form.key}\">{{::form.title}}</span></md-switch></md-input-container>");
$templateCache.put("decorators/material/tabarray.html","<div ng-model=\"modelArray\" schema-validate=\"form\" sf-array=\"form\" md-theme=\"dark\" sf-field-model=\"sf-new-array\" layout=\"column\" layout-padding=\"\" sf-new-array=\"$$value$$\" class=\"clearfix schema-form-tabarray {{form.htmlClass}}\"><div class=\"md-toolbar-tools\"><h3>{{ form.title }}</h3><span flex=\"\"></span><md-button class=\"md-icon-button\" ng-hide=\"form.readonly\" ng-disabled=\"form.schema.maxItems <= modelArray.length\" ng-click=\"$event.preventDefault() || (appendToArray())\"><ng-md-icon icon=\"add\"></ng-md-icon></md-button></div><md-tabs md-selected=\"form.selectedIndex\" md-dynamic-height=\"\" md-border-bottom=\"\" md-autoselect=\"\"><md-tab ng-repeat=\"item in modelArray track by $index\" ng-disabled=\"item.disabled\" label=\"{{ form.title + ($index+1) }}{{item.title}}\"><div class=\"tab{{$index%4}}\"><md-button class=\"md-icon-button\" ng-hide=\"form.readonly\" ng-click=\"deleteFromArray($index)\" ng-disabled=\"form.schema.minItems >= modelArray.length\"><ng-md-icon icon=\"delete\"></ng-md-icon></md-button><sf-decorator ng-init=\"arrayIndex = $index\" form=\"copyWithIndex($index)\"></sf-decorator></div></md-tab></md-tabs></div>");
$templateCache.put("decorators/material/tabs.html","<div sf-field-model=\"\" class=\"schema-form-tabs {{::form.htmlClass}}\"><md-tabs md-dynamic-height=\"\" md-selected=\"selected\" md-autoselect=\"\" ng-init=\"selected = 0\"></md-tabs></div>");
$templateCache.put("decorators/material/textarea.html","<md-input-container class=\"{{::form.htmlClass}} schema-form-textarea\" md-is-error=\"!$root.isEmptyObject(ngModel.$error)\"><label ng-show=\"showTitle()\" for=\"{{::form.key|sfCamelKey}}\">{{::form.title}}</label> <textarea ng-class=\"::form.fieldHtmlClass\" id=\"{{::form.key|sfCamelKey}}\" sf-changed=\"form\" ng-disabled=\"::form.readonly\" sf-field-model=\"\" md-maxlength=\"form.maxLength\" schema-validate=\"form\" rows=\"{{ form.rows }}\" cols=\"{{ form.cols }}\" name=\"{{::form.key|sfCamelKey}}\"></textarea><div ng-messages=\"ngModel.$error\"><div sf-message=\"\" ng-message=\"\"></div></div><div class=\"md-char-counter\">{{ form.description }}</div></md-input-container>");}]);
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

/**
 * It might be a bug, but currently input[type=number] does not add
 * a parser, so the model gets populated with a string. It does however stop non numbers so it
 * must have some preproccessing. Anyway, this adds parser before schema-validate hooks into it.
 * FIXME: this is still not a complete solution. Inputting a string in an input[type=number] results
 * in parsers never firing and ngModel value removed. So no validation from schema-validate either.
 */
angular.module('schemaForm').directive('sfTypeParser', function() {
  return {
    restrict: 'A',
    scope: false,
    require: 'ngModel',
    link: function(scope, element, attrs, ngModel) {
      var once = scope.$watch(attrs.sfTypeParser, function(schema) {
        if (!schema) {
          return;
        }

        var isNumber  = schema.type.indexOf('number') !== -1;
        var isInteger = schema.type.indexOf('integer') !== -1;
        var numberRE  = /^[0-9]*$/;
        // Use index of since type can be either an array with two values or a string.
        if (isNumber || isInteger) {
          // The timing here seems to work. i.e. we get in before schema-validate
          ngModel.$parsers.push(function(viewValue) {
            var value;
            if (isNumber) {
              value = parseFloat(viewValue);
            } else if (numberRE.test(viewValue)) {
              // We test the value to check that it's a valid integer, otherwise we can easily
              // get float -> integer parsing behind the scenes.
              value = parseInt(viewValue, 10);
            }
            console.log('parser', numberRE.test(viewValue), viewValue, value)
            if (value === undefined || isNaN(value)) {
              //Let the validation fail. @FIXME: it fails with "required" for some reason.
              return viewValue;
            }
            return value;
          });
        }

        once();
      });
    }
  };
});

});