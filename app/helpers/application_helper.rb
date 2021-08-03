module ApplicationHelper

    def profile_picture account

        img = property.image.present? ? property.image : "placeholder.png"
        image_tag img, class: "profile-pic img-circle" 
 
    end
end
