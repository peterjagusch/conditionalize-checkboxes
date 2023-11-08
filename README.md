# conditionalize-checkboxes

How to use it:
Multiple new options available.



Checks for name of checkboxes, name="Form_multiCheckboxes
Add class "conditional" on condition that will be shown.
Check if : Form_multiCheckboxes=== undefined : No checkbox with name : "Form_multiCheckboxes" is selected)
Check if : Form_multiCheckboxes !== undefined : At least 1 checkbox with name : "Form_multiCheckboxes" is selected)
Check: ['Option 3'].includes(Form_multiCheckboxes)  : Use includes to see if a specific value is selected
Check: ['Option 2','Option 3'].includes(Form_multiCheckboxes)  : Use includes to see if multiple values are selected (one of )
Check : ['Option 1','Option 2'].excludes(Form_multiCheckboxes) : Use includes to see if either values are not selected



 <p class="checkboxes">
		<h5>Select options</h5>
		<label class="d-block" for="option-1-2"><input type="checkbox" name="Form_multiCheckboxes" value="Option 1" id="option-1-2" class="form-check-input" />&nbsp;Option 1</label>
		<label class="d-block" for="option-2"><input type="checkbox" name="Form_multiCheckboxes" value="Option 2" id="option-2" class="form-check-input" />&nbsp;Option 2</label>
		<label class="d-block" for="option-3"><input type="checkbox" name="Form_multiCheckboxes" value="Option 3" id="option-3" class="form-check-input" />&nbsp;Option 3</label>
	</p>

   
   
   <p class="instruction_paragraph conditional" data-condition="Form_multiCheckboxes=== undefined"><span>Multi checkboxes is empty</span></p>
   <p class="instruction_paragraph conditional" data-condition="Form_multiCheckboxes!== undefined"><span>Multi checkboxes is not empty</span></p>
   <p class="instruction_paragraph conditional" data-condition="['Option 3',''].includes(Form_multiCheckboxes)"><span>Multi checkbox is Option 3 or Empty</span></p>
   <p class="instruction_paragraph conditional" data-condition="['Option 2',''].excludes(Form_multiCheckboxes)"><span>Multi checkbox is NOT Option 2 or Empty</span></p>
   <p class="instruction_paragraph conditional" data-condition="['Option 2','Option 3'].includes(Form_multiCheckboxes)"><span>Multi checkbox is Option 2 or Option 3</span></p>
   <p class="instruction_paragraph conditional" data-condition="['Option 1','Option 2'].excludes(Form_multiCheckboxes)"><span>Multi checkbox is NOT Option 1 or Option 2</span></p>
   <p class="instruction_paragraph conditional" data-condition="Form_multiCheckboxes==='Option 1' || Form_multiCheckboxes==='Option 2'"><span>Is option 1 or 2 with || as or </span></p>
   <p class="instruction_paragraph conditional" data-condition="Form_multiCheckboxes=== 'Option 1'"><span>VxForm_multiCheckboxes=== 'Option 1'</span></p>
   <p class="instruction_paragraph conditional" data-condition="( Form_multiCheckboxes === 'Option 1' &amp;&amp; Form_multiCheckboxes === 'Option 2' )"><span>Multi checkbox is Option 1 AND Option 2</span></p>
   <p class="instruction_paragraph conditional" data-condition="Form_multiCheckboxes=== 'Option 1' || Form_multiCheckboxes=== 'Option 2' || Form_multiCheckboxes=== 'Option 3'"><span>Form_multiCheckboxes=== 'Option 1' || Form_multiCheckboxes=== 'Option 2' || Form_multiCheckboxes=== 'Option 3'</span></p>
   <p class="instruction_paragraph conditional" data-condition="Form_multiCheckboxes=== 'Option 1' &amp;&amp; Form_multiCheckboxes=== 'Option 2' &amp;&amp; Form_multiCheckboxes=== 'Option 3'"><span>Form_multiCheckboxes=== 'Option 1' &amp;&amp; Form_multiCheckboxes=== 'Option 2' &amp;&amp; Form_multiCheckboxes=== 'Option 3'</span></p>
