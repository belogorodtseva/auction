from django import forms
from django.contrib.admin import widgets
from acsite.models import Category




final_choices =()

for c in Category.objects.all():
    another_choice = (c.pk, c.name)
    final_choices = (another_choice,) + final_choices


class AddForm(forms.Form):
    name = forms.CharField(required=True,max_length=300)
    description = forms.CharField(
        required=True,
        max_length=2000,
        widget=forms.Textarea(),
    )
    category = forms.CharField(required=True,widget=forms.Select(choices=final_choices))
    startprice = forms.CharField(required=True,widget=forms.NumberInput(attrs={'minlength': 1, 'maxlength': 15,'type': 'number',}))
    mainimage = forms.ImageField(required=False)
    timefinish = forms.TimeField(required=True,widget=forms.TextInput(attrs={'type': 'time', 'value': '00:00'}))
    datefinish = forms.DateTimeField(required=True,widget=forms.TextInput(attrs={'type': 'date'}))
    image1 = forms.ImageField(required=False)
    image2 = forms.ImageField(required=False)
    image3 = forms.ImageField(required=False)
    image4 = forms.ImageField(required=False)
    image5 = forms.ImageField(required=False)


    def clean(self):
        cleaned_data = super(AddForm, self).clean()
        name = cleaned_data.get('name')
        description = cleaned_data.get('description')
        category = cleaned_data.get('category')
        startprice = cleaned_data.get('startprice')
        mainimage = cleaned_data.get('mainimage')
        timefinish = cleaned_data.get('timefinish')
        datefinish = cleaned_data.get('datefinish')
        image1 = cleaned_data.get('image1')
        image2 = cleaned_data.get('image2')
        image3 = cleaned_data.get('image3')
        image4 = cleaned_data.get('image4')
        image5 = cleaned_data.get('image5')
        if not name and not description and not category and not startprice and not datefinish and not timefinish:
            raise forms.ValidationError('You have to write something!')

class BidForm(forms.Form):
    startprice = forms.CharField(required=True)
    error = ""
    def clean(self):
        cleaned_data = super(BidForm, self).clean()
        startprice = cleaned_data.get('startprice')
        if not startprice:
            raise forms.ValidationError('You have to write something!')
