from wagtail import blocks


class FoldBlock(blocks.StaticBlock):
    class Meta:
        admin_text = "Inserts a html <!--more--> element"
        icon = "collapse-down"
        template = "blog/blocks/fold.html"
