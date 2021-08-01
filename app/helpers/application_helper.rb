module ApplicationHelper

    def profile_picture account

        img = account.image.present? ? account.image : "placeholder.png"
        image_tag img, class: "profile_pic img-circle" 
        # thumb = account.image.present? ? account.image.thumb.url : "placeholder.jpeg"
        # image_tag thumb, class: "profile_pic img-circle"

    end
end
