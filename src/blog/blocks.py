from django import forms
from wagtail import blocks


class FoldBlock(blocks.RawHTMLBlock):
    def __init__(
        self,
        required=True,
        help_text=None,
        max_length=None,
        min_length=None,
        validators=(),
        **kwargs,
    ):
        self.field = forms.CharField(
            required=required,
            help_text=help_text,
            max_length=max_length,
            min_length=min_length,
            validators=validators,
            widget=forms.Textarea,
            disabled=True,
        )
        super().__init__(
            required, help_text, max_length, min_length, validators, **kwargs
        )

    class Meta:
        editable = False
