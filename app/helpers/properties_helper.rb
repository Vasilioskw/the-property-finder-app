module PropertiesHelper
    
    def property_thumbnail property
        # img = property.photo.present? ? property.photo : "placeholder.png"
        img = property.photo.present? ? property.photo : "placeholder.png"
        image_tag img, class: "property-thumb photoResize" 
    end
end
