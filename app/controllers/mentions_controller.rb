class MentionsController < ApplicationController
    def index
      users = User.order('id ASC').all
      num_users = users.length
      grouped_users = users.each_slice((num_users / 2.0).ceil).to_a

      @users_group_a = grouped_users[0]
      @users_group_b = grouped_users[1]

      if Mention.all.present?
        @latest_mention = Mention.order('created_at DESC').first.id
        @user_most_mentions = User.where.not(mentions_count: nil).order('mentions_count DESC, updated_at DESC').first.id
      end
    end

    def show
      @user = User.find_by(id: params[:id])
    end

    def new
      @mention = Mention.new
      @mention_types = YAML.load_file(Rails.root.join('config', 'mention_types_config.yml'))
      @mention_user = User.find_by(id: params[:id])
    end

    def create
      @mention = Mention.create do |m|
        m.user = User.find_by(id: create_mention_params[:user].to_i)
        m.mention_type = create_mention_params[:mention_type]
        m.comment = create_mention_params[:comment]
      end

      if @mention.save
        redirect_to :root
      end

    end

    private
    def create_mention_params
      params.require(:mention).permit(:user, :mention_type, :comment)
    end
end

