class ResourcesController < ApplicationController
  before_action :set_resource, only: [:show, :edit, :update, :destroy]
  before_action :set_keylist

  # GET /resources
  # GET /resources.json
  def index
    @resources = Resource.where(keylist_id: params[:keylist_id] )
    @active_resources  = @resources.select { |res|  res.status == 'active'  }
    @pending_resources = @resources.select { |res|  res.status == 'pending' }
    @banned_resources  = @resources.select { |res|  res.status == 'banned' && ( res.updated_at > 3.days.ago ) }
  end

  # GET /resources/1
  # GET /resources/1.json
  def show
  end

  # GET /resources/new
  def new
    @resource = Resource.new
  end

  # GET /resources/1/edit
  def edit
    ## if editing current resource -> do shit

    logger.debug 'resource id:'
    logger.debug @resource.id
  end

  # POST /resources
  # POST /resources.json
  def create
    logger.debug 'params: '
    logger.debug resource_params
    @resource = Resource.new(resource_params)
    @resource.keylist_id = params[:keylist_id]

    #@resource.status = 'pending'
    respond_to do |format|
      if @resource.save
        format.html { redirect_to keylist_resource_path(@keylist, @resource) , notice: 'resource was successfully created.' }
        format.json { render :show, status: :created, location: @resource }
      else
        format.html { render :new }
        format.json { render json: @resource.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /resources/1
  # PATCH/PUT /resources/1.json
  def update
    respond_to do |format|
      if @resource.update(resource_params)
        format.html { redirect_to [@keylist, @resource], notice: 'resource was successfully updated.' }
        format.json { render :show, status: :ok, location: @resource }
      else
        format.html { render :edit }
        format.json { render json: @resource.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /resources/1
  # DELETE /resources/1.json
  def destroy
    @resource.destroy
    respond_to do |format|
      format.html { redirect_to keylist_resources_url, notice: 'resource was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_resource
      @resource = Resource.find(params[:id])
    end

    def set_keylist
      @keylist  = Keylist.find(params[:keylist_id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def resource_params
      params.require(:resource).permit(:name, :status, :keylist_id)
    end


end
