module PropertiesHelper
    
    def property_thumbnail property
        img = property.photo.present? ? property.photo : "placeholder.png"
        image_tag img, class: "property-thumb" 
        # return property.photo.variant(resize: '200x200')

    end

    def property_photo_url property
        property.photo.present? ? property.photo.url : asset_url("placeholder.png")

    end
end
