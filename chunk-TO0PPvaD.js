import{t as r}from"./chunk-zystk1pz.js";import{$r as Zn,Bn as zu,Br as Sx,Dr as O,Ei as jc,Fi as mx,Hi as pe,Ht as bae,Ir as Rk,Ji as qx,Jn as C1,Ki as px,Kn as Ag,Pi as mt,Ri as nu,Ui as pf,Vi as p,Vr as TF,Wr as Tv,X as Lf,Xi as sO,Y as Kze,Yi as rg,Yn as CK,Zi as t0,aa as v_,ai as b,ar as EK,b as A5,bi as ib,dn as moe,dt as Sae,et as Noe,ga as xx,i as _a,ir as EF,ji as mO,mi as gO,mn as ni,ot as Q4,pa as wg,r as Ta,rt as Ote,ta as ue$1,ua as wK,un as m5,ur as Fx,va as y_,vt as UP,wi as jE,xi as ir,yi as iO,yr as JN,zi as ob,zr as Sn}from"./main-ADAH4OB5.js";var Ae=()=>({label:`How to install PO`,url:`/guides/how-install`});var _e=i=>[i];var ue=(()=>{class i{static ɵfac=function(a){return new(a||i)};static ɵcmp=Zn({type:i,selectors:[[`sample-po-dropdown-basic`]],standalone:!1,decls:1,vars:4,consts:[[`p-label`,`PO Dropdown`,3,`p-actions`]],template:function(a,o){a&1&&nu(0,`po-dropdown`,0),a&2&&jE(`p-actions`,mO(2,_e,gO(1,Ae)))},dependencies:[UP],encapsulation:2,changeDetection:1})}return i})();var Te=i=>({"docs-sample-code-tabs":i});var be=(()=>{class i{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(a){return new(a||i)};static ɵcmp=Zn({type:i,selectors:[[`sample-po-dropdown-basic-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(a,o){a&1&&(nu(0,`br`),jc(1,`blockquote`,0)(2,`label`,1),iO(3,`PO Dropdown Basic`),wg(),jc(4,`a`,2),mt(`click`,function(){return o.toggleSampleCodeTabs()}),nu(5,`span`),iO(6),wg()(),jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),iO(12,`sample-po-dropdown-basic/sample-po-dropdown-basic.component.html`),wg(),jc(13,`pre`,7),iO(14,`<po-dropdown p-label="PO Dropdown" [p-actions]="[{ label: 'How to install PO', url: '/guides/how-install' }]">
</po-dropdown>
`),wg()()(),jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),iO(18,`sample-po-dropdown-basic/sample-po-dropdown-basic.component.ts`),wg(),jc(19,`pre`,9),iO(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-dropdown-basic',
  templateUrl: './sample-po-dropdown-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoDropdownBasicComponent {}
`),wg()()()()(),jc(21,`div`,10),nu(22,`sample-po-dropdown-basic`),wg(),nu(23,`hr`)),a&2&&(rg(5),qx(`po-icon `+o.sampleCodeButtonIcon),rg(),Ag(` `,o.sampleCodeButtonLabel),rg(),jE(`ngClass`,mO(4,Te,o.hideSampleCodeTabs)))},dependencies:[Rk,_a,bae,Sae,ue],encapsulation:2,changeDetection:1})}return i})();var Se=(()=>{class i{poNotification=p(zu);action;actions;parentList;label;properties;size;actionOptions=[{label:`Disabled`,value:`disabled`},{label:`Separator`,value:`separator`},{label:`Selected`,value:`selected`},{label:`Visible`,value:`visible`}];iconOptions=[{value:`an an-newspaper`,label:`an an-newspaper`},{value:`an an-magnifying-glass`,label:`an an-magnifying-glass`},{value:`an an-globe`,label:`an an-globe`},{value:`fa fa-podcast`,label:`fa fa-podcast`}];propertiesOptions=[{value:`disabled`,label:`Disabled`}];sizeOptions=[{label:`small`,value:`small`},{label:`medium`,value:`medium`}];typeOptions=[{label:`Danger`,value:`danger`},{label:`Default`,value:`default`}];ngOnInit(){this.restore()}addAction(r$1){let a=r({},r$1);if(a.action=a.action?this.showAction.bind(this,a.action):void 0,!r$1.parent)this.actions=[...this.actions,a];else{let o=this.getActionNode(this.actions,r$1.parent);o?o.subItems=[...o.subItems||[],a]:this.actions=[...this.actions,a]}this.actions=[].concat(this.actions),this.parentList=this.updateParentList(this.actions),this.restoreActionForm()}getActionNode(r,a){if(!(!r||!Array.isArray(r)||!a))for(let o of r){if(o.label===a||o.value===a)return o;if(o.subItems&&Array.isArray(o.subItems)){let m=this.getActionNode(o.subItems,a);if(m)return m}}}updateParentList(r,a=0,o=[]){return!r||!Array.isArray(r)||r.forEach(m=>{let{label:b}=m;o.push({label:`${`-`.repeat(a)} ${b}`,value:b}),m.subItems&&Array.isArray(m.subItems)&&this.updateParentList(m.subItems,a+1,o)}),o}restore(){this.actions=[],this.parentList=[],this.label=`PO Dropdown`,this.size=`medium`,this.properties=[],this.restoreActionForm()}restoreActionForm(){this.action={label:void 0,visible:null,parent:void 0}}showAction(r){this.poNotification.success(`Action clicked: ${r}`)}static ɵfac=function(a){return new(a||i)};static ɵcmp=Zn({type:i,selectors:[[`sample-po-dropdown-labs`]],standalone:!1,decls:23,vars:21,consts:[[`formAction`,`ngForm`],[`f`,`ngForm`],[1,`po-row`],[1,`po-offset-xl-5`,`po-offset-lg-5`,3,`p-actions`,`p-disabled`,`p-label`,`p-size`],[`name`,`actionLabel`,`p-label`,`Label`,`p-required`,``,1,`po-md-6`,`po-lg-4`,3,`ngModelChange`,`ngModel`],[`name`,`actionAction`,`p-clean`,``,`p-label`,`Action`,1,`po-md-6`,`po-lg-4`,3,`ngModelChange`,`ngModel`],[`name`,`actionURL`,`p-label`,`URL`,1,`po-md-6`,`po-lg-4`,3,`ngModelChange`,`ngModel`],[`name`,`type`,`p-label`,`Type`,1,`po-md-6`,`po-lg-4`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`icon`,`p-label`,`Icon`,1,`po-md-6`,`po-lg-4`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`parent`,`p-label`,`Subitems`,`p-placeholder`,`Add subitems`,1,`po-md-6`,`po-lg-4`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`action`,`p-columns`,`4`,`p-indeterminate`,``,`p-label`,`Action properties`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`p-label`,`Add Action`,1,`po-md-4`,`po-lg-2`,3,`p-click`,`p-disabled`],[`name`,`label`,`p-clean`,``,`p-label`,`Label`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`properties`,`p-label`,`Properties`,1,`po-md-6`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`size`,`p-label`,`Size`,`p-help`,`Para aplicar o tamanho small, configure o nível de acessibilidade para AA, ajustável no navbar ou serviço de tema (https://po-ui.io/documentation/po-theme).`,1,`po-md-12`,`po-lg-6`,3,`ngModelChange`,`ngModel`,`p-options`],[`p-label`,`Sample Restore`,1,`po-lg-3`,`po-md-6`,3,`p-click`]],template:function(a,o){if(a&1){let m=Sx();jc(0,`div`,2),nu(1,`po-dropdown`,3),wg(),nu(2,`po-divider`),jc(3,`form`,null,0)(5,`po-input`,4),JN(),ob(`ngModelChange`,function(d){return y_(m),sO(o.action.label,d)||(o.action.label=d),v_(d)}),wg(),jc(6,`po-input`,5),JN(),ob(`ngModelChange`,function(d){return y_(m),sO(o.action.action,d)||(o.action.action=d),v_(d)}),wg(),jc(7,`po-input`,6),JN(),ob(`ngModelChange`,function(d){return y_(m),sO(o.action.url,d)||(o.action.url=d),v_(d)}),wg(),jc(8,`po-select`,7),JN(),ob(`ngModelChange`,function(d){return y_(m),sO(o.action.type,d)||(o.action.type=d),v_(d)}),wg(),jc(9,`po-select`,8),JN(),ob(`ngModelChange`,function(d){return y_(m),sO(o.action.icon,d)||(o.action.icon=d),v_(d)}),wg(),jc(10,`po-select`,9),JN(),ob(`ngModelChange`,function(d){return y_(m),sO(o.action.parent,d)||(o.action.parent=d),v_(d)}),wg(),jc(11,`po-checkbox-group`,10),JN(),ob(`ngModelChange`,function(d){return y_(m),sO(o.action,d)||(o.action=d),v_(d)}),wg(),jc(12,`div`,2)(13,`po-button`,11),mt(`p-click`,function(){return o.addAction(o.action)}),wg()()(),nu(14,`po-divider`),jc(15,`form`,null,1)(17,`div`,2)(18,`po-input`,12),JN(),ob(`ngModelChange`,function(d){return y_(m),sO(o.label,d)||(o.label=d),v_(d)}),wg()(),jc(19,`po-checkbox-group`,13),JN(),ob(`ngModelChange`,function(d){return y_(m),sO(o.properties,d)||(o.properties=d),v_(d)}),wg(),jc(20,`po-radio-group`,14),JN(),ob(`ngModelChange`,function(d){return y_(m),sO(o.size,d)||(o.size=d),v_(d)}),wg(),jc(21,`div`,2)(22,`po-button`,15),mt(`p-click`,function(){return o.restore()}),wg()()()}if(a&2){let m=Fx(4);rg(),jE(`p-actions`,o.actions)(`p-disabled`,o.properties.includes(`disabled`))(`p-label`,o.label)(`p-size`,o.size),rg(4),ib(`ngModel`,o.action.label),t0(),rg(),ib(`ngModel`,o.action.action),t0(),rg(),ib(`ngModel`,o.action.url),t0(),rg(),ib(`ngModel`,o.action.type),jE(`p-options`,o.typeOptions),t0(),rg(),ib(`ngModel`,o.action.icon),jE(`p-options`,o.iconOptions),t0(),rg(),ib(`ngModel`,o.action.parent),jE(`p-options`,o.parentList),t0(),rg(),ib(`ngModel`,o.action),jE(`p-options`,o.actionOptions),t0(),rg(2),jE(`p-disabled`,m.form.invalid),rg(5),ib(`ngModel`,o.label),t0(),rg(),ib(`ngModel`,o.properties),jE(`p-options`,o.propertiesOptions),t0(),rg(),ib(`ngModel`,o.size),jE(`p-options`,o.sizeOptions),t0()}},dependencies:[wK,CK,EK,TF,EF,ni,Lf,UP,m5,A5,Ote,moe],encapsulation:2,changeDetection:1})}return i})();var Fe=i=>({"docs-sample-code-tabs":i});var ge=(()=>{class i{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(a){return new(a||i)};static ɵcmp=Zn({type:i,selectors:[[`sample-po-dropdown-labs-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(a,o){a&1&&(nu(0,`br`),jc(1,`blockquote`,0)(2,`label`,1),iO(3,`PO Dropdown Labs`),wg(),jc(4,`a`,2),mt(`click`,function(){return o.toggleSampleCodeTabs()}),nu(5,`span`),iO(6),wg()(),jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),iO(12,`sample-po-dropdown-labs/sample-po-dropdown-labs.component.html`),wg(),jc(13,`pre`,7),iO(14,`<div class="po-row">
  <po-dropdown
    class="po-offset-xl-5 po-offset-lg-5"
    [p-actions]="actions"
    [p-disabled]="properties.includes('disabled')"
    [p-label]="label"
    [p-size]="size"
  >
  </po-dropdown>
</div>

<po-divider />

<form #formAction="ngForm">
  <po-input class="po-md-6 po-lg-4" name="actionLabel" [(ngModel)]="action.label" p-label="Label" p-required>
  </po-input>

  <po-input class="po-md-6 po-lg-4" name="actionAction" [(ngModel)]="action.action" p-clean p-label="Action">
  </po-input>

  <po-input class="po-md-6 po-lg-4" name="actionURL" [(ngModel)]="action.url" p-label="URL"> </po-input>

  <po-select class="po-md-6 po-lg-4" name="type" [(ngModel)]="action.type" p-label="Type" [p-options]="typeOptions">
  </po-select>

  <po-select class="po-md-6 po-lg-4" name="icon" [(ngModel)]="action.icon" p-label="Icon" [p-options]="iconOptions">
  </po-select>

  <po-select
    class="po-md-6 po-lg-4"
    name="parent"
    [(ngModel)]="action.parent"
    p-label="Subitems"
    p-placeholder="Add subitems"
    [p-options]="parentList"
  >
  </po-select>

  <po-checkbox-group
    class="po-md-12"
    name="action"
    [(ngModel)]="action"
    p-columns="4"
    p-indeterminate
    p-label="Action properties"
    [p-options]="actionOptions"
  >
  </po-checkbox-group>

  <div class="po-row">
    <po-button
      class="po-md-4 po-lg-2"
      p-label="Add Action"
      [p-disabled]="formAction.form.invalid"
      (p-click)="addAction(action)"
    >
    </po-button>
  </div>
</form>

<po-divider />

<form #f="ngForm">
  <div class="po-row">
    <po-input class="po-md-6" name="label" [(ngModel)]="label" p-clean p-label="Label" p-required> </po-input>
  </div>
  <po-checkbox-group
    class="po-md-6"
    name="properties"
    [(ngModel)]="properties"
    p-label="Properties"
    [p-options]="propertiesOptions"
  >
  </po-checkbox-group>

  <po-radio-group
    class="po-md-12 po-lg-6"
    name="size"
    [(ngModel)]="size"
    p-label="Size"
    p-help="Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme)."
    [p-options]="sizeOptions"
  >
  </po-radio-group>

  <div class="po-row">
    <po-button class="po-lg-3 po-md-6" p-label="Sample Restore" (p-click)="restore()"> </po-button>
  </div>
</form>
`),wg()()(),jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),iO(18,`sample-po-dropdown-labs/sample-po-dropdown-labs.component.ts`),wg(),jc(19,`pre`,9),iO(20,`import { Component, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';

import {
  PoCheckboxGroupOption,
  PoSelectOption,
  PoDropdownAction,
  PoRadioGroupOption,
  PoNotificationService
} from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-dropdown-labs',
  templateUrl: './sample-po-dropdown-labs.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoDropdownLabsComponent implements OnInit {
  private poNotification = inject(PoNotificationService);

  action: PoDropdownAction & { parent?: string };
  actions: Array<PoDropdownAction>;
  parentList: Array<PoSelectOption>;
  label: string;
  properties: Array<string>;
  size: string;

  public readonly actionOptions: Array<PoCheckboxGroupOption> = [
    { label: 'Disabled', value: 'disabled' },
    { label: 'Separator', value: 'separator' },
    { label: 'Selected', value: 'selected' },
    { label: 'Visible', value: 'visible' }
  ];

  public readonly iconOptions: Array<PoSelectOption> = [
    { value: 'an an-newspaper', label: 'an an-newspaper' },
    { value: 'an an-magnifying-glass', label: 'an an-magnifying-glass' },
    { value: 'an an-globe', label: 'an an-globe' },
    { value: 'fa fa-podcast', label: 'fa fa-podcast' }
  ];

  public readonly propertiesOptions: Array<PoCheckboxGroupOption> = [{ value: 'disabled', label: 'Disabled' }];

  public readonly sizeOptions: Array<PoRadioGroupOption> = [
    { label: 'small', value: 'small' },
    { label: 'medium', value: 'medium' }
  ];

  public readonly typeOptions: Array<PoSelectOption> = [
    { label: 'Danger', value: 'danger' },
    { label: 'Default', value: 'default' }
  ];

  ngOnInit() {
    this.restore();
  }

  addAction(action: PoDropdownAction & { parent?: string }) {
    const newAction: PoDropdownAction = { ...action };
    newAction.action = newAction.action ? this.showAction.bind(this, newAction.action) : undefined;

    if (!action.parent) {
      this.actions = [...this.actions, newAction];
    } else {
      const parentNode = this.getActionNode(this.actions, action.parent);
      if (parentNode) {
        parentNode.subItems = [...(parentNode.subItems || []), newAction];
      } else {
        this.actions = [...this.actions, newAction];
      }
    }

    this.actions = [].concat(this.actions);
    this.parentList = this.updateParentList(this.actions);

    this.restoreActionForm();
  }

  private getActionNode(items: Array<PoDropdownAction>, value: string): PoDropdownAction | undefined {
    if (!items || !Array.isArray(items) || !value) {
      return undefined;
    }

    for (const item of items) {
      if (item.label === value || (item as any).value === value) {
        return item;
      }

      if (item.subItems && Array.isArray(item.subItems)) {
        const found = this.getActionNode(item.subItems, value);
        if (found) {
          return found;
        }
      }
    }

    return undefined;
  }

  private updateParentList(
    items: Array<PoDropdownAction>,
    level = 0,
    parentList: Array<PoSelectOption> = []
  ): Array<PoSelectOption> {
    if (!items || !Array.isArray(items)) {
      return parentList;
    }

    items.forEach(item => {
      const { label } = item;
      parentList.push({ label: \`\${'-'.repeat(level)} \${label}\`, value: label });

      if (item.subItems && Array.isArray(item.subItems)) {
        this.updateParentList(item.subItems, level + 1, parentList);
      }
    });

    return parentList;
  }

  restore() {
    this.actions = [];
    this.parentList = [];
    this.label = 'PO Dropdown';
    this.size = 'medium';
    this.properties = [];
    this.restoreActionForm();
  }

  restoreActionForm() {
    this.action = {
      label: undefined,
      visible: null,
      parent: undefined
    };
  }

  showAction(label: string): void {
    this.poNotification.success(\`Action clicked: \${label}\`);
  }
}
`),wg()()()()(),jc(21,`div`,10),nu(22,`sample-po-dropdown-labs`),wg(),nu(23,`hr`)),a&2&&(rg(5),qx(`po-icon `+o.sampleCodeButtonIcon),rg(),Ag(` `,o.sampleCodeButtonLabel),rg(),jE(`ngClass`,mO(4,Fe,o.hideSampleCodeTabs)))},dependencies:[Rk,_a,bae,Sae,Se],encapsulation:2,changeDetection:1})}return i})();function ze(i,Pe){if(i&1&&(jc(0,`div`,0),nu(1,`po-avatar`,2),jc(2,`div`,3)(3,`span`,4),iO(4),wg(),jc(5,`span`,5),iO(6),wg(),jc(7,`span`,5),iO(8),wg()()(),jc(9,`div`,0),nu(10,`po-dropdown`,6),wg()),i&2){let r=xx();rg(),jE(`p-src`,r.userAvatar),rg(3),Ag(` `,r.currentFriend.name,` `),rg(2),Ag(` `,r.currentFriend.mutualFriends,` mutual friends `),rg(2),Ag(` Resides in `,r.currentFriend.reside,` `),rg(2),jE(`p-actions`,r.answers)}}function Ne(i,Pe){i&1&&(jc(0,`div`,0)(1,`span`,7),iO(2,`Congratulations TOTVS, no more requests!`),wg()())}var Ee=(()=>{class i{poNotification=p(zu);currentFriend;userAvatar=`https://lorempixel.com/144/144/`;answers=[{label:`Confirm`,action:this.notification.bind(this,`added`,`success`)},{label:`Ignore`,action:this.notification.bind(this,`ignored`,`warning`)},{label:`Block`,action:this.notification.bind(this,`blocked`,`information`)}];newFriends=[{name:`Mr. Dev PO`,mutualFriends:`7`,reside:`Mountain View, CA`},{name:`Mr. AI PO`,mutualFriends:`99+`,reside:`New York City, NY`},{name:`Mr. UX PO`,mutualFriends:`14`,reside:`Los Angeles, CA`}];indexFriend=0;ngOnInit(){this.setCurrentFriend(0)}notification(r,a){this.poNotification[a](`User ${r} successfully!`),this.indexFriend++,this.setCurrentFriend(this.indexFriend)}setCurrentFriend(r){this.currentFriend=this.newFriends[r]}static ɵfac=function(a){return new(a||i)};static ɵcmp=Zn({type:i,selectors:[[`sample-po-dropdown-social-network`]],standalone:!1,decls:4,vars:1,consts:[[1,`po-row`],[`p-title`,`Friend Request`,1,`po-lg-6`],[`p-size`,`lg`,1,`po-md-4`,3,`p-src`],[1,`po-md-8`],[1,`po-sm-12`,`po-font-subtitle`],[1,`po-sm-12`,`po-font-text`],[`p-label`,`Add as friend?`,1,`po-lg-8`,`po-offset-md-4`,`po-offset-lg-4`,`po-offset-xl-4`,3,`p-actions`],[1,`po-lg-8`,`po-font-subtitle`]],template:function(a,o){a&1&&(jc(0,`div`,0)(1,`po-widget`,1),px(2,ze,11,5)(3,Ne,3,0,`div`,0),wg()()),a&2&&(rg(2),mx(o.currentFriend?2:3))},dependencies:[Q4,UP,Noe],encapsulation:2,changeDetection:1})}return i})();var Be=i=>({"docs-sample-code-tabs":i});var he=(()=>{class i{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(a){return new(a||i)};static ɵcmp=Zn({type:i,selectors:[[`sample-po-dropdown-social-network-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(a,o){a&1&&(nu(0,`br`),jc(1,`blockquote`,0)(2,`label`,1),iO(3,`PO Dropdown - Social Network`),wg(),jc(4,`a`,2),mt(`click`,function(){return o.toggleSampleCodeTabs()}),nu(5,`span`),iO(6),wg()(),jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),iO(12,`sample-po-dropdown-social-network/sample-po-dropdown-social-network.component.html`),wg(),jc(13,`pre`,7),iO(14,`<div class="po-row">
  <po-widget class="po-lg-6" p-title="Friend Request">
    @if (currentFriend) {
      <div class="po-row">
        <po-avatar class="po-md-4" p-size="lg" [p-src]="userAvatar"> </po-avatar>
        <div class="po-md-8">
          <span class="po-sm-12 po-font-subtitle">
            { { currentFriend.name }}
          </span>
          <span class="po-sm-12 po-font-text"> { { currentFriend.mutualFriends }} mutual friends </span>
          <span class="po-sm-12 po-font-text"> Resides in { { currentFriend.reside }} </span>
        </div>
      </div>
      <div class="po-row">
        <po-dropdown
          class="po-lg-8 po-offset-md-4 po-offset-lg-4 po-offset-xl-4"
          p-label="Add as friend?"
          [p-actions]="answers"
        >
        </po-dropdown>
      </div>
    } @else {
      <div class="po-row">
        <span class="po-lg-8 po-font-subtitle">Congratulations TOTVS, no more requests!</span>
      </div>
    }
  </po-widget>
</div>
`),wg()()(),jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),iO(18,`sample-po-dropdown-social-network/sample-po-dropdown-social-network.component.ts`),wg(),jc(19,`pre`,9),iO(20,`import { Component, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';

import { PoNotificationService } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-dropdown-social-network',
  templateUrl: './sample-po-dropdown-social-network.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoDropdownSocialNetworkComponent implements OnInit {
  private poNotification = inject(PoNotificationService);

  currentFriend: object;
  userAvatar: string = 'https://lorempixel.com/144/144/';

  public readonly answers: Array<object> = [
    { label: 'Confirm', action: this.notification.bind(this, 'added', 'success') },
    { label: 'Ignore', action: this.notification.bind(this, 'ignored', 'warning') },
    { label: 'Block', action: this.notification.bind(this, 'blocked', 'information') }
  ];

  public readonly newFriends: Array<object> = [
    { name: 'Mr. Dev PO', mutualFriends: '7', reside: 'Mountain View, CA' },
    { name: 'Mr. AI PO', mutualFriends: '99+', reside: 'New York City, NY' },
    { name: 'Mr. UX PO', mutualFriends: '14', reside: 'Los Angeles, CA' }
  ];

  private indexFriend: number = 0;

  ngOnInit() {
    this.setCurrentFriend(0);
  }

  private notification(action: string, notificationType: string) {
    this.poNotification[notificationType](\`User \${action} successfully!\`);

    this.indexFriend++;
    this.setCurrentFriend(this.indexFriend);
  }

  private setCurrentFriend(index: number) {
    this.currentFriend = this.newFriends[index];
  }
}
`),wg()()()()(),jc(21,`div`,10),nu(22,`sample-po-dropdown-social-network`),wg(),nu(23,`hr`)),a&2&&(rg(5),qx(`po-icon `+o.sampleCodeButtonIcon),rg(),Ag(` `,o.sampleCodeButtonLabel),rg(),jE(`ngClass`,mO(4,Be,o.hideSampleCodeTabs)))},dependencies:[Rk,_a,bae,Sae,Ee],encapsulation:2,changeDetection:1})}return i})();var fe=(()=>{class i{actions=[{label:`New Sale`,action:()=>console.log(`New Sale`)},{label:`New Cancellation`,action:()=>console.log(`New Cancellation`),type:`danger`},{label:`Reports`,subItems:[{label:`Monthly Sales`,action:()=>console.log(`Monthly Sales`),icon:`an an-chart-line-up`},{label:`Annual Sales`,action:()=>console.log(`Annual Sales`),icon:`an an-chart-line-up`}]},{label:`Settings`,subItems:[{label:`Users`,action:()=>console.log(`Users`)},{label:`System`,subItems:[{label:`Backup`,action:()=>console.log(`Backup`)},{label:`Logs`,action:()=>console.log(`Logs`)}]}]}];static ɵfac=function(a){return new(a||i)};static ɵcmp=Zn({type:i,selectors:[[`sample-po-dropdown-subitems`]],standalone:!1,decls:1,vars:1,consts:[[`p-label`,`PO Dropdown`,3,`p-actions`]],template:function(a,o){a&1&&nu(0,`po-dropdown`,0),a&2&&jE(`p-actions`,o.actions)},dependencies:[UP],encapsulation:2,changeDetection:1})}return i})();var Re=i=>({"docs-sample-code-tabs":i});var we=(()=>{class i{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(a){return new(a||i)};static ɵcmp=Zn({type:i,selectors:[[`sample-po-dropdown-subitems-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(a,o){a&1&&(nu(0,`br`),jc(1,`blockquote`,0)(2,`label`,1),iO(3,`PO Dropdown Subitems`),wg(),jc(4,`a`,2),mt(`click`,function(){return o.toggleSampleCodeTabs()}),nu(5,`span`),iO(6),wg()(),jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),iO(12,`sample-po-dropdown-subitems/sample-po-dropdown-subitems.component.html`),wg(),jc(13,`pre`,7),iO(14,`<po-dropdown p-label="PO Dropdown" [p-actions]="actions"> </po-dropdown>
`),wg()()(),jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),iO(18,`sample-po-dropdown-subitems/sample-po-dropdown-subitems.component.ts`),wg(),jc(19,`pre`,9),iO(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';
import { PoDropdownAction } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-dropdown-subitems',
  templateUrl: './sample-po-dropdown-subitems.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoDropdownSubitemsComponent {
  actions: Array<PoDropdownAction> = [
    { label: 'New Sale', action: () => console.log('New Sale') },
    { label: 'New Cancellation', action: () => console.log('New Cancellation'), type: 'danger' },
    {
      label: 'Reports',
      subItems: [
        { label: 'Monthly Sales', action: () => console.log('Monthly Sales'), icon: 'an an-chart-line-up' },
        { label: 'Annual Sales', action: () => console.log('Annual Sales'), icon: 'an an-chart-line-up' }
      ]
    },
    {
      label: 'Settings',
      subItems: [
        { label: 'Users', action: () => console.log('Users') },
        {
          label: 'System',
          subItems: [
            { label: 'Backup', action: () => console.log('Backup') },
            { label: 'Logs', action: () => console.log('Logs') }
          ]
        }
      ]
    }
  ];
}
`),wg()()()()(),jc(21,`div`,10),nu(22,`sample-po-dropdown-subitems`),wg(),nu(23,`hr`)),a&2&&(rg(5),qx(`po-icon `+o.sampleCodeButtonIcon),rg(),Ag(` `,o.sampleCodeButtonLabel),rg(),jE(`ngClass`,mO(4,Re,o.hideSampleCodeTabs)))},dependencies:[Rk,_a,bae,Sae,fe],encapsulation:2,changeDetection:1})}return i})();var Ce=(()=>{class i{shouldFailReports=!0;actions=[{label:`New Sale`,action:()=>console.log(`New Sale`)},{label:`Reports (lazy)`,subItemsLazy:r=>this.loadReports(r)},{label:`Settings (lazy)`,subItemsLazy:()=>this.loadSettings()}];onSubItemsLoad(r){console.log(`Loading sub items for:`,r.label)}loadReports(r){return this.shouldFailReports?(this.shouldFailReports=!1,pf(()=>new Error(`Falha ao carregar relatórios`)).pipe(Tv(1e3))):O([{label:`Monthly Sales`,action:()=>console.log(`Monthly Sales`)},{label:`Annual Sales`,action:()=>console.log(`Annual Sales`)}]).pipe(Tv(1e3))}loadSettings(){return O([{label:`Users`,action:()=>console.log(`Users`)},{label:`System`,action:()=>console.log(`System`)}]).pipe(Tv(1500))}static ɵfac=function(a){return new(a||i)};static ɵcmp=Zn({type:i,selectors:[[`sample-po-dropdown-lazy-subitems`]],standalone:!1,decls:1,vars:1,consts:[[`p-label`,`PO Dropdown Lazy`,3,`p-sub-items-load`,`p-actions`]],template:function(a,o){a&1&&(jc(0,`po-dropdown`,0),mt(`p-sub-items-load`,function(b){return o.onSubItemsLoad(b)}),wg()),a&2&&jE(`p-actions`,o.actions)},dependencies:[UP],encapsulation:2})}return i})();var Ue=i=>({"docs-sample-code-tabs":i});var xe=(()=>{class i{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(a){return new(a||i)};static ɵcmp=Zn({type:i,selectors:[[`sample-po-dropdown-lazy-subitems-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(a,o){a&1&&(nu(0,`br`),jc(1,`blockquote`,0)(2,`label`,1),iO(3,`PO Dropdown Lazy Subitems`),wg(),jc(4,`a`,2),mt(`click`,function(){return o.toggleSampleCodeTabs()}),nu(5,`span`),iO(6),wg()(),jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),iO(12,`sample-po-dropdown-lazy-subitems/sample-po-dropdown-lazy-subitems.component.html`),wg(),jc(13,`pre`,7),iO(14,`<po-dropdown p-label="PO Dropdown Lazy" [p-actions]="actions" (p-sub-items-load)="onSubItemsLoad($event)">
</po-dropdown>
`),wg()()(),jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),iO(18,`sample-po-dropdown-lazy-subitems/sample-po-dropdown-lazy-subitems.component.ts`),wg(),jc(19,`pre`,9),iO(20,`import { Component } from '@angular/core';
import { Observable, delay, of, throwError } from 'rxjs';

import { PoDropdownAction } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-dropdown-lazy-subitems',
  templateUrl: './sample-po-dropdown-lazy-subitems.component.html',
  standalone: false
})
export class SamplePoDropdownLazySubitemsComponent {
  private shouldFailReports = true;

  actions: Array<PoDropdownAction> = [
    { label: 'New Sale', action: () => console.log('New Sale') },
    {
      label: 'Reports (lazy)',
      subItemsLazy: (item: PoDropdownAction) => this.loadReports(item)
    },
    {
      label: 'Settings (lazy)',
      subItemsLazy: () => this.loadSettings()
    }
  ];

  onSubItemsLoad(item: PoDropdownAction): void {
    console.log('Loading sub items for:', item.label);
  }

  private loadReports(_item: PoDropdownAction): Observable<Array<PoDropdownAction>> {
    if (this.shouldFailReports) {
      this.shouldFailReports = false;
      return throwError(() => new Error('Falha ao carregar relat\xF3rios')).pipe(delay(1000));
    }

    return of([
      { label: 'Monthly Sales', action: () => console.log('Monthly Sales') },
      { label: 'Annual Sales', action: () => console.log('Annual Sales') }
    ]).pipe(delay(1000));
  }

  private loadSettings(): Observable<Array<PoDropdownAction>> {
    return of([
      { label: 'Users', action: () => console.log('Users') },
      { label: 'System', action: () => console.log('System') }
    ]).pipe(delay(1500));
  }
}
`),wg()()()()(),jc(21,`div`,10),nu(22,`sample-po-dropdown-lazy-subitems`),wg(),nu(23,`hr`)),a&2&&(rg(5),qx(`po-icon `+o.sampleCodeButtonIcon),rg(),Ag(` `,o.sampleCodeButtonLabel),rg(),jE(`ngClass`,mO(4,Ue,o.hideSampleCodeTabs)))},dependencies:[Rk,_a,bae,Sae,Ce],encapsulation:2,changeDetection:1})}return i})();var ve=(()=>{class i{static ɵfac=function(a){return new(a||i)};static ɵcmp=Zn({type:i,selectors:[[`sample-po-dropdown-doc`]],standalone:!1,decls:743,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[`href`,`/guides/getting-started`],[`href`,`https://po-ui.io/guides/theme-customization`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`Array<PoDropdownAction>`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[1,`docs-api-output-marker`],[1,`docs-api-output-alias`],[`pan`,``,1,`docs-api-property-type`,`EventEmitter`],[`pan`,``,1,`docs-api-property-type`,`boolean`],[`pan`,``,1,`docs-api-property-type`,`string`],[`href`,`https://po-ui.io/documentation/po-theme`],[1,`docs-api-h4`,`docs-api-class-name`],[`pan`,``,1,`docs-api-property-type`,`Function`],[`pan`,``,1,`docs-api-property-type`,`TemplateRef<void>`],[`href`,`https://po-ui.io/icons`],[`pan`,``,1,`docs-api-property-type`,`Array<PoPopupAction>`],[`pan`,``,1,`docs-api-property-type`,`(item:`,`PoPopupAction)`,`=>`,`Observable<Array<PoPopupAction>>`]],template:function(a,o){a&1&&(jc(0,`div`,0)(1,`p`,1)(2,`code`),iO(3,`import { PoDropdownModule } from '@po-ui/ng-components';`),wg()(),jc(4,`div`,2)(5,`p`),iO(6,`Módulo do componente po-dropdown.`),wg()(),jc(7,`h3`,3),iO(8,`Componente`),wg(),jc(9,`h4`,4)(10,`code`,5),iO(11,`PoDropdownComponent`),wg()(),jc(12,`div`,2)(13,`p`),iO(14,`O componente `),jc(15,`code`),iO(16,`po-dropdown`),wg(),iO(17,` pode ser utilizado como um agrupador de ações e / ou opções.`),wg(),jc(18,`blockquote`)(19,`p`),iO(20,`Caso não haja configuração de rotas em sua aplicação, se faz necessário importar o `),jc(21,`code`),iO(22,`RouterModule`),wg(),iO(23,`
no m\xF3dulo principal para o correto funcionamento deste componente:`),wg()(),jc(24,`pre`)(25,`code`),iO(26,`import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    ...
    RouterModule.forRoot([]),
    PoModule
  ],
  declarations: [
    AppComponent
  ],
  exports: [],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
`),wg()(),jc(27,`blockquote`)(28,`p`),iO(29,`Para maiores d\xFAvidas referente \xE0 configura\xE7\xE3o de rotas, acesse em nosso portal /Guias /Come\xE7ando
`),jc(30,`a`,6),iO(31,`/Configurando as rotas do po-menu`),wg(),iO(32,`.`),wg()(),jc(33,`h4`),iO(34,`Tokens customizáveis`),wg(),jc(35,`p`),iO(36,`É possível alterar o estilo do componente usando os seguintes tokens (CSS):`),wg(),jc(37,`blockquote`)(38,`p`),iO(39,`Para maiores informações, acesse o guia `),jc(40,`a`,7),iO(41,`Personalizando o Tema Padrão com Tokens CSS`),wg(),iO(42,`.`),wg()(),jc(43,`table`)(44,`thead`)(45,`tr`)(46,`th`),iO(47,`Propriedade`),wg(),jc(48,`th`),iO(49,`Descrição`),wg(),jc(50,`th`),iO(51,`Valor Padrão`),wg()()(),jc(52,`tbody`)(53,`tr`)(54,`td`)(55,`strong`),iO(56,`Default Values`),wg()(),nu(57,`td`)(58,`td`),wg(),jc(59,`tr`)(60,`td`)(61,`code`),iO(62,`--font-family`),wg()(),jc(63,`td`),iO(64,`Família tipográfica usada`),wg(),jc(65,`td`)(66,`code`),iO(67,`var(--font-family-theme)`),wg()()(),jc(68,`tr`)(69,`td`)(70,`code`),iO(71,`--font-size`),wg()(),jc(72,`td`),iO(73,`Tamanho da fonte`),wg(),jc(74,`td`)(75,`code`),iO(76,`var(--font-size-default)`),wg()()(),jc(77,`tr`)(78,`td`)(79,`code`),iO(80,`--font-weight`),wg()(),jc(81,`td`),iO(82,`Peso da fonte`),wg(),jc(83,`td`)(84,`code`),iO(85,`var(--font-weight-bold)`),wg()()(),jc(86,`tr`)(87,`td`)(88,`code`),iO(89,`--line-height`),wg()(),jc(90,`td`),iO(91,`Tamanho da label`),wg(),jc(92,`td`)(93,`code`),iO(94,`var(--line-height-none)`),wg()()(),jc(95,`tr`)(96,`td`)(97,`code`),iO(98,`--color`),wg()(),jc(99,`td`),iO(100,`Cor principal do dropdown`),wg(),jc(101,`td`)(102,`code`),iO(103,`var(--color-action-default)`),wg()()(),jc(104,`tr`)(105,`td`)(106,`code`),iO(107,`--border-radius`),wg()(),jc(108,`td`),iO(109,`Contém o valor do raio dos cantos do elemento\xA0`),wg(),jc(110,`td`)(111,`code`),iO(112,`var(--border-radius-md)`),wg()()(),jc(113,`tr`)(114,`td`)(115,`code`),iO(116,`--border-width`),wg()(),jc(117,`td`),iO(118,`Contém o valor da largura dos cantos do elemento\xA0`),wg(),jc(119,`td`)(120,`code`),iO(121,`var(--border-width-md)`),wg()()(),jc(122,`tr`)(123,`td`)(124,`code`),iO(125,`--padding`),wg()(),jc(126,`td`),iO(127,`Preenchimento`),wg(),jc(128,`td`)(129,`code`),iO(130,`0 1em`),wg()()(),jc(131,`tr`)(132,`td`)(133,`strong`),iO(134,`Hover`),wg()(),nu(135,`td`)(136,`td`),wg(),jc(137,`tr`)(138,`td`)(139,`code`),iO(140,`--color-hover`),wg()(),jc(141,`td`),iO(142,`Cor principal no estado hover`),wg(),jc(143,`td`)(144,`code`),iO(145,`var(--color-brand-01-darkest)`),wg()()(),jc(146,`tr`)(147,`td`)(148,`code`),iO(149,`--background-hover`),wg()(),jc(150,`td`),iO(151,`Cor de background no estado hover`),wg(),jc(152,`td`)(153,`code`),iO(154,`var(--color-brand-01-lighter)`),wg()()(),jc(155,`tr`)(156,`td`)(157,`strong`),iO(158,`Focused`),wg()(),nu(159,`td`)(160,`td`),wg(),jc(161,`tr`)(162,`td`)(163,`code`),iO(164,`--outline-color-focused`),wg(),iO(165,` \xA0`),wg(),jc(166,`td`),iO(167,`Cor do outline do estado de focus`),wg(),jc(168,`td`)(169,`code`),iO(170,`var(--color-action-focus)`),wg()()(),jc(171,`tr`)(172,`td`)(173,`strong`),iO(174,`Pressed`),wg()(),nu(175,`td`)(176,`td`),wg(),jc(177,`tr`)(178,`td`)(179,`code`),iO(180,`--background-pressed`),wg(),iO(181,` \xA0`),wg(),jc(182,`td`),iO(183,`Cor de background no estado de pressionado\xA0`),wg(),jc(184,`td`)(185,`code`),iO(186,`var(--color-brand-01-light)`),wg()()(),jc(187,`tr`)(188,`td`)(189,`strong`),iO(190,`Disabled`),wg()(),nu(191,`td`)(192,`td`),wg(),jc(193,`tr`)(194,`td`)(195,`code`),iO(196,`--color-disabled`),wg()(),jc(197,`td`),iO(198,`Cor principal no estado disabled`),wg(),jc(199,`td`)(200,`code`),iO(201,`var(--color-action-disabled)`),wg()()()()()(),jc(202,`div`,8)(203,`h4`,9),iO(204,`Seletor`),wg(),jc(205,`pre`,10),iO(206,`<po-dropdown
    p-actions="Array<PoDropdownAction>"
    (p-click-item)="EventEmitter"
    p-disabled="boolean"
    p-label="string"
    p-position="string"
    (p-root-items-load)="EventEmitter"
    p-size="string"
    (p-sub-items-load)="EventEmitter" >
</po-dropdown>
`),wg()(),jc(207,`h4`,11),iO(208,`Propriedades`),wg(),jc(209,`table`,12)(210,`tr`,13)(211,`th`,14),iO(212,`Nome`),wg(),jc(213,`th`,14),iO(214,`Tipo`),wg(),jc(215,`th`,14),iO(216,`Padrão`),wg(),jc(217,`th`,14),iO(218,`Descrição`),wg()(),jc(219,`tr`,15)(220,`td`,16)(221,`div`,17)(222,`span`,18),iO(223,` p-actions`),nu(224,`br`),wg()()(),jc(225,`td`,19)(226,`code`,20),iO(227,`Array<PoDropdownAction>`),wg()(),jc(228,`td`,21),iO(229,`-`),wg(),jc(230,`td`,22)(231,`p`),iO(232,`Lista de a\xE7\xF5es que ser\xE3o exibidas no componente.
Aceita um `),jc(233,`em`),iO(234,`array`),wg(),iO(235,` de `),jc(236,`code`),iO(237,`PoDropdownAction`),wg(),iO(238,`.`),wg()()(),jc(239,`tr`,15)(240,`td`,16)(241,`div`,23)(242,`span`,24),iO(243,` (p-click-item)`),nu(244,`br`),wg()()(),jc(245,`td`,19)(246,`code`,25),iO(247,`EventEmitter`),wg()(),jc(248,`td`,21),iO(249,`-`),wg(),jc(250,`td`,22)(251,`em`)(252,`strong`),iO(253,`(opcional)`),wg()(),jc(254,`p`),iO(255,`Evento disparado a cada clique em um item do menu.
Retorna o item clicado (`),jc(256,`code`),iO(257,`PoDropdownAction`),wg(),iO(258,`).`),wg(),jc(259,`blockquote`)(260,`p`),iO(261,`Não é disparado para a ação interna de voltar (`),jc(262,`code`),iO(263,`goBack`),wg(),iO(264,`).`),wg()()()(),jc(265,`tr`,15)(266,`td`,16)(267,`div`,17)(268,`span`,18),iO(269,` p-disabled`),nu(270,`br`),wg()()(),jc(271,`td`,19)(272,`code`,26),iO(273,`boolean`),wg()(),jc(274,`td`,21)(275,`p`)(276,`code`),iO(277,`false`),wg()()(),jc(278,`td`,22)(279,`em`)(280,`strong`),iO(281,`(opcional)`),wg()(),jc(282,`p`),iO(283,`Desabilita o campo.`),wg()()(),jc(284,`tr`,15)(285,`td`,16)(286,`div`,17)(287,`span`,18),iO(288,` p-label`),nu(289,`br`),wg()()(),jc(290,`td`,19)(291,`code`,27),iO(292,`string`),wg()(),jc(293,`td`,21),iO(294,`-`),wg(),jc(295,`td`,22)(296,`p`),iO(297,`Adiciona um rótulo ao `),jc(298,`code`),iO(299,`dropdown`),wg(),iO(300,`.`),wg()()(),jc(301,`tr`,15)(302,`td`,16)(303,`div`,17)(304,`span`,18),iO(305,` p-position`),nu(306,`br`),wg()()(),jc(307,`td`,19)(308,`code`,27),iO(309,`string`),wg()(),jc(310,`td`,21)(311,`p`)(312,`code`),iO(313,`bottom-left`),wg()()(),jc(314,`td`,22)(315,`em`)(316,`strong`),iO(317,`(opcional)`),wg()(),jc(318,`p`),iO(319,`Define a posição preferencial de abertura do popup do dropdown em relação ao botão.`),wg(),jc(320,`p`),iO(321,`Posições válidas:`),wg(),jc(322,`ul`)(323,`li`)(324,`code`),iO(325,`right`),wg(),iO(326,`: No lado direito.`),wg(),jc(327,`li`)(328,`code`),iO(329,`right-bottom`),wg(),iO(330,`: No lado direito inferior.`),wg(),jc(331,`li`)(332,`code`),iO(333,`right-top`),wg(),iO(334,`: No lado direito superior.`),wg(),jc(335,`li`)(336,`code`),iO(337,`bottom`),wg(),iO(338,`: Abaixo.`),wg(),jc(339,`li`)(340,`code`),iO(341,`bottom-left`),wg(),iO(342,`: Abaixo e à esquerda (padrão).`),wg(),jc(343,`li`)(344,`code`),iO(345,`bottom-right`),wg(),iO(346,`: Abaixo e à direita.`),wg(),jc(347,`li`)(348,`code`),iO(349,`left`),wg(),iO(350,`: No lado esquerdo.`),wg(),jc(351,`li`)(352,`code`),iO(353,`left-top`),wg(),iO(354,`: No lado esquerdo superior.`),wg(),jc(355,`li`)(356,`code`),iO(357,`left-bottom`),wg(),iO(358,`: No lado esquerdo inferior.`),wg(),jc(359,`li`)(360,`code`),iO(361,`top`),wg(),iO(362,`: Acima.`),wg(),jc(363,`li`)(364,`code`),iO(365,`top-right`),wg(),iO(366,`: Acima e à direita.`),wg(),jc(367,`li`)(368,`code`),iO(369,`top-left`),wg(),iO(370,`: Acima e à esquerda.`),wg()(),jc(371,`blockquote`)(372,`p`),iO(373,`O popup será rotacionado automaticamente caso não caiba na posição definida.`),wg()()()(),jc(374,`tr`,15)(375,`td`,16)(376,`div`,23)(377,`span`,24),iO(378,` (p-root-items-load)`),nu(379,`br`),wg()()(),jc(380,`td`,19)(381,`code`,25),iO(382,`EventEmitter`),wg()(),jc(383,`td`,21),iO(384,`-`),wg(),jc(385,`td`,22)(386,`em`)(387,`strong`),iO(388,`(opcional)`),wg()(),jc(389,`p`),iO(390,`Evento disparado no momento em que a requisição assíncrona do nível raiz é iniciada`),wg(),jc(391,`blockquote`)(392,`p`),iO(393,`Compatível com a propriedade PoPopupAction.subItemsLazy`),wg()()()(),jc(394,`tr`,15)(395,`td`,16)(396,`div`,17)(397,`span`,18),iO(398,` p-size`),nu(399,`br`),wg()()(),jc(400,`td`,19)(401,`code`,27),iO(402,`string`),wg()(),jc(403,`td`,21)(404,`p`)(405,`code`),iO(406,`medium`),wg()()(),jc(407,`td`,22)(408,`em`)(409,`strong`),iO(410,`(opcional)`),wg()(),jc(411,`p`),iO(412,`Define o tamanho do componente:`),wg(),jc(413,`ul`)(414,`li`)(415,`code`),iO(416,`small`),wg(),iO(417,`: altura do button como 32px (disponível apenas para acessibilidade AA).`),wg(),jc(418,`li`)(419,`code`),iO(420,`medium`),wg(),iO(421,`: altura do button como 44px.`),wg()(),jc(422,`blockquote`)(423,`p`),iO(424,`Caso a acessibilidade AA não esteja configurada, o tamanho `),jc(425,`code`),iO(426,`medium`),wg(),iO(427,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),jc(428,`a`,28),iO(429,`po-theme`),wg(),iO(430,`.`),wg()()()(),jc(431,`tr`,15)(432,`td`,16)(433,`div`,23)(434,`span`,24),iO(435,` (p-sub-items-load)`),nu(436,`br`),wg()()(),jc(437,`td`,19)(438,`code`,25),iO(439,`EventEmitter`),wg()(),jc(440,`td`,21),iO(441,`-`),wg(),jc(442,`td`,22)(443,`em`)(444,`strong`),iO(445,`(opcional)`),wg()(),jc(446,`p`),iO(447,`Evento disparado no momento em que a requisi\xE7\xE3o ass\xEDncrona de um subn\xEDvel \xE9 iniciada.
Retorna o item agrupador (`),jc(448,`code`),iO(449,`PoDropdownAction`),wg(),iO(450,`) que originou o carregamento.`),wg(),jc(451,`blockquote`)(452,`p`),iO(453,`Compatível com a propriedade PoPopupAction.subItemsLazy`),wg()()()()(),jc(454,`h3`),iO(455,`Interfaces`),wg(),jc(456,`h4`,29)(457,`code`,5),iO(458,`PoDropdownAction`),wg()(),jc(459,`div`,2)(460,`p`),iO(461,`Interface para as ações do componente `),jc(462,`code`),iO(463,`po-dropdown`),wg(),iO(464,`.`),wg()(),jc(465,`h4`,11),iO(466,`Propriedades`),wg(),jc(467,`table`,12)(468,`tr`,13)(469,`th`,14),iO(470,`Nome`),wg(),jc(471,`th`,14),iO(472,`Tipo`),wg(),jc(473,`th`,14),iO(474,`Descrição`),wg()(),jc(475,`tr`,15)(476,`td`,16)(477,`div`,17)(478,`span`,18),iO(479,` action`),nu(480,`br`),wg()()(),jc(481,`td`,19)(482,`code`,30),iO(483,`Function`),wg()(),jc(484,`td`,22)(485,`em`)(486,`strong`),iO(487,`(opcional)`),wg()(),jc(488,`p`),iO(489,`Ação que será executada, sendo possível passar o nome ou a referência da função.`),wg(),jc(490,`p`),iO(491,`A action também pode ser executada para o agrupador de subitens quando a ação possuir `),jc(492,`code`),iO(493,`subItems`),wg(),iO(494,`.`),wg(),jc(495,`blockquote`)(496,`p`),iO(497,`Para que a função seja executada no contexto do componente, utilize `),jc(498,`em`),iO(499,`bind`),wg(),iO(500,`:
`),jc(501,`code`),iO(502,`action: this.myFunction.bind(this)`),wg()()()()(),jc(503,`tr`,15)(504,`td`,16)(505,`div`,17)(506,`span`,18),iO(507,` disabled`),nu(508,`br`),wg()()(),jc(509,`td`,19)(510,`code`,26),iO(511,`boolean `),wg(),jc(512,`code`,30),iO(513,` Function`),wg()(),jc(514,`td`,22)(515,`em`)(516,`strong`),iO(517,`(opcional)`),wg()(),jc(518,`p`),iO(519,`Desabilita a ação. Aceita um valor booleano ou uma função que retorna booleano.`),wg()()(),jc(520,`tr`,15)(521,`td`,16)(522,`div`,17)(523,`span`,18),iO(524,` icon`),nu(525,`br`),wg()()(),jc(526,`td`,19)(527,`code`,27),iO(528,`string `),wg(),jc(529,`code`,31),iO(530,` TemplateRef<void>`),wg()(),jc(531,`td`,22)(532,`em`)(533,`strong`),iO(534,`(opcional)`),wg()(),jc(535,`p`),iO(536,`Ícone exibido ao lado esquerdo do rótulo.`),wg(),jc(537,`p`),iO(538,`Aceita ícones da `),jc(539,`a`,32),iO(540,`Biblioteca de ícones`),wg(),iO(541,`, fontes externas (ex: Font Awesome)
ou um `),jc(542,`code`),iO(543,`TemplateRef`),wg(),iO(544,` para ícones customizados.`),wg(),jc(545,`pre`)(546,`code`),iO(547,`{ label: 'A\xE7\xE3o', icon: 'an an-newspaper' }
`),wg()()()(),jc(548,`tr`,15)(549,`td`,16)(550,`div`,17)(551,`span`,18),iO(552,` label`),nu(553,`br`),wg()()(),jc(554,`td`,19)(555,`code`,27),iO(556,`string`),wg()(),jc(557,`td`,22)(558,`p`),iO(559,`Rótulo da ação.`),wg(),jc(560,`p`),iO(561,`A label também pode representar o agrupador de subitens quando a ação possuir `),jc(562,`code`),iO(563,`subItems`),wg(),iO(564,`.`),wg()()(),jc(565,`tr`,15)(566,`td`,16)(567,`div`,17)(568,`span`,18),iO(569,` selected`),nu(570,`br`),wg()()(),jc(571,`td`,19)(572,`code`,26),iO(573,`boolean`),wg()(),jc(574,`td`,22)(575,`em`)(576,`strong`),iO(577,`(opcional)`),wg()(),jc(578,`p`),iO(579,`Define se a ação está selecionada.`),wg()()(),jc(580,`tr`,15)(581,`td`,16)(582,`div`,17)(583,`span`,18),iO(584,` separator`),nu(585,`br`),wg()()(),jc(586,`td`,19)(587,`code`,26),iO(588,`boolean`),wg()(),jc(589,`td`,22)(590,`em`)(591,`strong`),iO(592,`(opcional)`),wg()(),jc(593,`p`),iO(594,`Atribui uma linha separadora acima do item.`),wg()()(),jc(595,`tr`,15)(596,`td`,16)(597,`div`,17)(598,`span`,18),iO(599,` subItems`),nu(600,`br`),wg()()(),jc(601,`td`,19)(602,`code`,33),iO(603,`Array<PoPopupAction>`),wg()(),jc(604,`td`,22)(605,`em`)(606,`strong`),iO(607,`(opcional)`),wg()(),jc(608,`p`),iO(609,`Define uma lista de subitens para criação de menus aninhados.`),wg(),jc(610,`pre`)(611,`code`),iO(612,`{ label: 'Relat\xF3rios', subItems: [{ label: 'Mensal' }, { label: 'Anual' }] }
`),wg()(),jc(613,`p`),iO(614,`Ao definir esta propriedade, o item exibir\xE1 um \xEDcone indicador de subn\xEDvel.
Recomenda-se utilizar no m\xE1ximo tr\xEAs n\xEDveis hier\xE1rquicos para garantir a usabilidade.`),wg(),jc(615,`blockquote`)(616,`p`),iO(617,`As propriedades `),jc(618,`code`),iO(619,`disabled`),wg(),iO(620,`, `),jc(621,`code`),iO(622,`type`),wg(),iO(623,` e `),jc(624,`code`),iO(625,`visible`),wg(),iO(626,` não são aplicadas visualmente ao item agrupador.`),wg()(),jc(627,`blockquote`)(628,`p`),iO(629,`Quando `),jc(630,`code`),iO(631,`url`),wg(),iO(632,` é informada em um agrupador, o redirecionamento terá prioridade e os subitens não serão abertos.`),wg()(),jc(633,`blockquote`)(634,`p`),iO(635,`Em subníveis aninhados, o `),jc(636,`code`),iO(637,`icon`),wg(),iO(638,` do agrupador é substituído pelo indicador de navegação (seta).`),wg()()()(),jc(639,`tr`,15)(640,`td`,16)(641,`div`,17)(642,`span`,18),iO(643,` subItemsLazy`),nu(644,`br`),wg()()(),jc(645,`td`,19)(646,`code`,34),iO(647,`(item: PoPopupAction) => Observable<Array<PoPopupAction>>`),wg()(),jc(648,`td`,22)(649,`em`)(650,`strong`),iO(651,`(opcional)`),wg()(),jc(652,`p`),iO(653,`Define o carregamento assíncrono (lazy loading) dos subitens de um agrupador.`),wg(),jc(654,`p`),iO(655,`Recebe o item agrupador e retorna um `),jc(656,`code`),iO(657,`Observable<Array<PoPopupAction>>`),wg(),iO(658,`. A requisi\xE7\xE3o \xE9 disparada
`),jc(659,`strong`),iO(660,`apenas`),wg(),iO(661,` no momento da expansão (clique ou atalho de teclado), exibindo placeholders com `),jc(662,`code`),iO(663,`po-skeleton`),wg(),iO(664,`
enquanto os dados s\xE3o carregados:`),wg(),jc(665,`pre`)(666,`code`),iO(667,`{
  label: 'Relat\xF3rios',
  subItemsLazy: (item) => this.reportService.getReports(item)
}
`),wg()(),jc(668,`blockquote`)(669,`p`),iO(670,`O resultado \xE9 armazenado em cache ap\xF3s o primeiro carregamento bem-sucedido.
Em caso de falha, \xE9 exibida uma mensagem com a op\xE7\xE3o de tentar novamente.`),wg()(),jc(671,`p`),iO(672,`Ao definir esta propriedade, o item exibirá um ícone indicador de subnível.`),wg()()(),jc(673,`tr`,15)(674,`td`,16)(675,`div`,17)(676,`span`,18),iO(677,` type`),nu(678,`br`),wg()()(),jc(679,`td`,19)(680,`code`,27),iO(681,`string`),wg()(),jc(682,`td`,22)(683,`em`)(684,`strong`),iO(685,`(opcional)`),wg()(),jc(686,`p`),iO(687,`Define a cor do item.`),wg(),jc(688,`p`),iO(689,`Valores válidos:`),wg(),jc(690,`ul`)(691,`li`)(692,`code`),iO(693,`default`),wg()(),jc(694,`li`)(695,`code`),iO(696,`danger`),wg()()()()(),jc(697,`tr`,15)(698,`td`,16)(699,`div`,17)(700,`span`,18),iO(701,` url`),nu(702,`br`),wg()()(),jc(703,`td`,19)(704,`code`,27),iO(705,`string`),wg()(),jc(706,`td`,22)(707,`em`)(708,`strong`),iO(709,`(opcional)`),wg()(),jc(710,`p`),iO(711,`URL para redirecionamento. Aceita rotas internas e links externos.`),wg(),jc(712,`p`),iO(713,`A url tamb\xE9m pode ser configurada para o agrupador de subitens.
Entretanto, quando a `),jc(714,`code`),iO(715,`url`),wg(),iO(716,` é informada em um agrupador, o clique `),jc(717,`strong`),iO(718,`não abrirá os subitens`),wg(),iO(719,`, pois o item ser\xE1
tratado como um link e o redirecionamento ter\xE1 prioridade sobre a exibi\xE7\xE3o da lista.`),wg(),jc(720,`blockquote`)(721,`p`),iO(722,`Quando informada, tem prioridade sobre a propriedade `),jc(723,`code`),iO(724,`action`),wg(),iO(725,`.`),wg()()()(),jc(726,`tr`,15)(727,`td`,16)(728,`div`,17)(729,`span`,18),iO(730,` visible`),nu(731,`br`),wg()()(),jc(732,`td`,19)(733,`code`,26),iO(734,`boolean `),wg(),jc(735,`code`,30),iO(736,` Function`),wg()(),jc(737,`td`,22)(738,`em`)(739,`strong`),iO(740,`(opcional)`),wg()(),jc(741,`p`),iO(742,`Define a visibilidade da ação. Aceita um valor booleano ou uma função que retorna booleano.`),wg()()()()())},dependencies:[_a],encapsulation:2,changeDetection:1})}return i})();var Ye=[{path:``,component:(()=>{class i{route;router;sub;hidePoWebSample=!0;samplesLength=5;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(r,a){this.route=r,this.router=a}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(r=>{let a=r.view;this.activeTab=a||`doc`,this.hidePoWebSample=this.samplesLength===0})}changeTab(r){this.router.navigate([],{queryParams:{view:r},queryParamsHandling:`merge`}),this.activeTab=r}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(a){return new(a||i)(b(ir),b(Sn))};static ɵcmp=Zn({type:i,selectors:[[`ng-component`]],standalone:!1,decls:10,vars:4,consts:[[`p-title`,`Dropdown`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-hide`,`p-active`]],template:function(a,o){a&1&&(jc(0,`po-page-default`,0)(1,`po-tabs`,1)(2,`po-tab`,2),mt(`p-click`,function(){return o.changeTab(`doc`)}),nu(3,`sample-po-dropdown-doc`),wg(),jc(4,`po-tab`,3),mt(`p-click`,function(){return o.changeTab(`web`)}),nu(5,`sample-po-dropdown-basic-view`)(6,`sample-po-dropdown-labs-view`)(7,`sample-po-dropdown-social-network-view`)(8,`sample-po-dropdown-subitems-view`)(9,`sample-po-dropdown-lazy-subitems-view`),wg()()()),a&2&&(jE(`p-actions`,o.actions),rg(2),jE(`p-active`,o.activeTab===`doc`),rg(2),jE(`p-hide`,o.hidePoWebSample)(`p-active`,o.activeTab===`web`))},dependencies:[Kze,bae,Sae,be,ge,he,we,xe,ve],encapsulation:2,changeDetection:1})}return i})()}];var De=(()=>{class i{static ɵfac=function(a){return new(a||i)};static ɵmod=pe({type:i});static ɵinj=ue$1({imports:[C1.forChild(Ye),C1]})}return i})();var Nt=(()=>{class i{static ɵfac=function(a){return new(a||i)};static ɵmod=pe({type:i});static ɵinj=ue$1({imports:[Ta,De]})}return i})();export{Nt as DocPoDropdownModule};