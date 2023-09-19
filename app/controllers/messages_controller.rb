class MessagesController < ApplicationController
  def random
    @greeting = Message.order('RANDOM()').first.greeting
    render json: { greeting: @greeting }
  end
end
