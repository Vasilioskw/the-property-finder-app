module ApplicationHelper

    def profile_picture account
        thumb = account.image,present? ? account.image.thumb.url : "placeholder.jpeg"
        image_tag thumb, class: "profile_pic img-circle"

    end
end
